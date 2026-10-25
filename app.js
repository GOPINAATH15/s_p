/**
 * Simple Practical Codes Website Logic (Dark Theme)
 */

(function () {
    'use strict';

    // State
    let currentSubject = 'osc'; // 'osc' or 'python'
    let currentProgram = null;
    let currentFileIndex = 0;
    let searchQuery = '';

    // Elements
    const tabOsc = document.getElementById('tabOsc');
    const tabPython = document.getElementById('tabPython');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const sidebarTitle = document.getElementById('sidebarTitle');
    const programList = document.getElementById('programList');
    const programTitle = document.getElementById('programTitle');
    const fileTabs = document.getElementById('fileTabs');
    const copyBtn = document.getElementById('copyBtn');
    const copyBtnText = document.getElementById('copyBtnText');
    const runBox = document.getElementById('runBox');
    const runCmd = document.getElementById('runCmd');
    const copyCmdBtn = document.getElementById('copyCmdBtn');
    const lineNumbers = document.getElementById('lineNumbers');
    const codeBlock = document.getElementById('codeBlock');
    const toast = document.getElementById('toast');

    const installBox = document.getElementById('installBox');
    const installNoteText = document.getElementById('installNoteText');
    const installCmdText = document.getElementById('installCmdText');
    const copyInstallBtn = document.getElementById('copyInstallBtn');

    let toastTimer = null;

    // Initialize
    function init() {
        tabOsc.addEventListener('click', () => switchSubject('osc'));
        tabPython.addEventListener('click', () => switchSubject('python'));

        searchInput.addEventListener('input', handleSearch);
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            clearSearch.style.display = 'none';
            searchQuery = '';
            renderSidebar();
        });

        copyBtn.addEventListener('click', copyCode);
        copyCmdBtn.addEventListener('click', copyCommand);
        copyInstallBtn.addEventListener('click', copyInstallCommand);

        // Load OSC by default
        switchSubject('osc');
    }

    // Switch between OSC and Python
    function switchSubject(subject) {
        currentSubject = subject;
        currentFileIndex = 0;

        tabOsc.classList.toggle('active', subject === 'osc');
        tabPython.classList.toggle('active', subject === 'python');

        const total = PRACTICAL_DATA[subject].length;
        sidebarTitle.textContent = `${subject.toUpperCase()} Programs (${total})`;

        renderSidebar();

        const programs = getFilteredPrograms();
        if (programs.length > 0) {
            selectProgram(programs[0]);
        }
    }

    // Filter programs based on search input
    function getFilteredPrograms() {
        const list = PRACTICAL_DATA[currentSubject] || [];
        if (!searchQuery) return list;

        return list.filter(p => {
            const q = searchQuery.toLowerCase();
            return (
                String(p.number).includes(q) ||
                p.title.toLowerCase().includes(q) ||
                p.files.some(f => f.name.toLowerCase().includes(q))
            );
        });
    }

    // Render program list in sidebar
    function renderSidebar() {
        const programs = getFilteredPrograms();
        programList.innerHTML = '';

        if (programs.length === 0) {
            programList.innerHTML = '<div style="padding: 16px; color: #888; text-align: center; font-size: 0.85rem;">No programs found</div>';
            return;
        }

        programs.forEach(prgm => {
            const item = document.createElement('div');
            item.className = 'prgm-item';
            if (currentProgram && currentProgram.id === prgm.id) {
                item.classList.add('active');
            }

            const padNum = String(prgm.number).padStart(2, '0');
            item.innerHTML = `
                <span class="prgm-num">${padNum}</span>
                <span class="prgm-name">${prgm.title}</span>
            `;

            item.addEventListener('click', () => {
                selectProgram(prgm);
            });

            programList.appendChild(item);
        });
    }

    // Select a program to display its code
    function selectProgram(prgm) {
        currentProgram = prgm;
        currentFileIndex = 0;

        // Highlight active sidebar item
        const items = programList.querySelectorAll('.prgm-item');
        const programs = getFilteredPrograms();
        const index = programs.findIndex(p => p.id === prgm.id);
        items.forEach((it, i) => {
            it.classList.toggle('active', i === index);
        });

        // Set title and run command
        programTitle.textContent = `Program ${prgm.number}: ${prgm.title}`;
        if (prgm.command) {
            runCmd.textContent = prgm.command;
            runBox.style.display = 'flex';
        } else {
            runBox.style.display = 'none';
        }

        // Installation Note and Command below program
        if (prgm.installNote) {
            installNoteText.textContent = prgm.installNote;
            installCmdText.textContent = prgm.installCommand || '';
            installBox.style.display = 'flex';
        } else {
            installBox.style.display = 'none';
        }

        // Render file tabs if more than 1 file
        renderFileTabs(prgm);

        // Display code
        displayCurrentFileCode();
    }

    // Render file tabs
    function renderFileTabs(prgm) {
        fileTabs.innerHTML = '';

        if (prgm.files.length <= 1) {
            fileTabs.style.display = 'none';
            return;
        }

        fileTabs.style.display = 'flex';
        prgm.files.forEach((file, idx) => {
            const btn = document.createElement('button');
            btn.className = `file-tab-btn ${idx === currentFileIndex ? 'active' : ''}`;
            btn.textContent = file.name;

            btn.addEventListener('click', () => {
                currentFileIndex = idx;
                renderFileTabs(prgm);
                displayCurrentFileCode();
            });

            fileTabs.appendChild(btn);
        });
    }

    // Display the code of the currently selected file
    function displayCurrentFileCode() {
        if (!currentProgram) return;

        const file = currentProgram.files[currentFileIndex] || currentProgram.files[0];
        if (!file) return;

        const rawCode = file.content || '';
        const lines = rawCode.split('\n');

        // Line numbers
        let nums = '';
        for (let i = 1; i <= lines.length; i++) {
            nums += i + '\n';
        }
        lineNumbers.textContent = nums;

        // Syntax highlight
        codeBlock.innerHTML = highlightCode(rawCode, file.language);
    }

    // Copy current file code to clipboard
    async function copyCode() {
        if (!currentProgram) return;

        const file = currentProgram.files[currentFileIndex] || currentProgram.files[0];
        if (!file) return;

        const success = await writeToClipboard(file.content);
        if (success) {
            copyBtn.classList.add('copied');
            copyBtnText.textContent = '✓ Copied!';
            showToast(`✓ Copied ${file.name} to clipboard!`);

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtnText.textContent = 'Copy Code';
            }, 1800);
        }
    }

    // Copy run command
    async function copyCommand() {
        if (!currentProgram || !currentProgram.command) return;

        const success = await writeToClipboard(currentProgram.command);
        if (success) {
            showToast(`✓ Copied command: ${currentProgram.command}`);
        }
    }

    // Copy install command
    async function copyInstallCommand() {
        if (!currentProgram || !currentProgram.installCommand) return;

        const success = await writeToClipboard(currentProgram.installCommand);
        if (success) {
            showToast(`✓ Copied install command: ${currentProgram.installCommand}`);
        }
    }

    // Helper to write to clipboard with fallback
    async function writeToClipboard(text) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch (e) {
            console.warn('Clipboard API error:', e);
        }

        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.top = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            const res = document.execCommand('copy');
            document.body.removeChild(ta);
            return res;
        } catch (e) {
            return false;
        }
    }

    // Search handler
    function handleSearch(e) {
        searchQuery = e.target.value.trim();
        clearSearch.style.display = searchQuery ? 'block' : 'none';
        renderSidebar();

        const filtered = getFilteredPrograms();
        if (filtered.length > 0) {
            selectProgram(filtered[0]);
        }
    }

    // Show temporary toast notification
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    }

    // Single-pass syntax highlighter
    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function highlightCode(rawCode, lang) {
        if (!rawCode) return '';

        let rules = [];
        if (lang === 'python') {
            rules = [
                { type: 'comment', regex: /#[^\n]*/ },
                { type: 'string', regex: /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
                { type: 'keyword', regex: /\b(def|class|return|if|elif|else|while|for|in|import|from|as|try|except|finally|raise|with|lambda|yield|and|or|not|is|None|True|False|break|continue|pass|global)\b/ },
                { type: 'builtin', regex: /\b(print|range|len|enumerate|zip|min|max|sum|list|dict|set|tuple|int|float|str|round|open|reversed|sorted)\b/ },
                { type: 'number', regex: /\b\d+(?:\.\d+)?\b/ },
                { type: 'function', regex: /\b[a-zA-Z_]\w*(?=\s*\()/ }
            ];
        } else if (lang === 'javascript' || lang === 'json') {
            rules = [
                { type: 'comment', regex: /\/\/[^\n]*|\/\*[\s\S]*?\*\// },
                { type: 'string', regex: /`[\s\S]*?`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
                { type: 'keyword', regex: /\b(const|let|var|function|return|if|else|for|while|import|export|from|require|class|new|async|await|try|catch|switch|case|default|break|continue|throw|typeof|instanceof|this|true|false|null|undefined)\b/ },
                { type: 'builtin', regex: /\b(console|document|window|Math|JSON|Array|Object|String|Number|Boolean|Promise|Set|Map|setInterval|setTimeout)\b/ },
                { type: 'number', regex: /\b\d+(?:\.\d+)?\b/ },
                { type: 'function', regex: /\b[a-zA-Z_$]\w*(?=\s*\()/ }
            ];
        } else if (lang === 'php') {
            rules = [
                { type: 'comment', regex: /\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*/ },
                { type: 'string', regex: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/ },
                { type: 'variable', regex: /\$[a-zA-Z_]\w*/ },
                { type: 'keyword', regex: /\b(echo|include|require|require_once|include_once|function|return|if|elseif|else|while|for|foreach|as|isset|die|exit|switch|case|default|class|new|public|private|protected)\b/ },
                { type: 'builtin', regex: /\b(mysqli_connect|mysqli_query|mysqli_error|mysqli_num_rows|session_start|session_destroy|header|unset)\b/ },
                { type: 'number', regex: /\b\d+\b/ }
            ];
        } else if (lang === 'html') {
            rules = [
                { type: 'comment', regex: /<!--[\s\S]*?-->/ },
                { type: 'tag', regex: /<\/?([a-zA-Z0-9-]+)/ },
                { type: 'attr', regex: /[a-zA-Z-]+(?=\s*=)/ },
                { type: 'string', regex: /"[^"]*"|'[^']*'/ }
            ];
        } else if (lang === 'css') {
            rules = [
                { type: 'comment', regex: /\/\*[\s\S]*?\*\// },
                { type: 'keyword', regex: /[a-zA-Z-]+(?=\s*:)/ },
                { type: 'number', regex: /\d+(?:px|%|em|rem|vh|vw|s|ms)?/ },
                { type: 'string', regex: /"[^"]*"|'[^']*'/ }
            ];
        } else if (lang === 'bash') {
            rules = [
                { type: 'comment', regex: /#[^\n]*/ },
                { type: 'function', regex: /\b(git|init|status|add|commit|branch|checkout|merge|remote|push|pull|clone|log|diff|config)\b/ },
                { type: 'string', regex: /"[^"]*"|'[^']*'/ }
            ];
        } else {
            return escapeHtml(rawCode);
        }

        const masterRegex = new RegExp(
            rules.map(r => `(${r.regex.source})`).join('|'),
            'g'
        );

        let lastIndex = 0;
        let result = '';
        let match;

        while ((match = masterRegex.exec(rawCode)) !== null) {
            const plainText = rawCode.slice(lastIndex, match.index);
            result += escapeHtml(plainText);

            let tokenType = 'plain';
            for (let i = 0; i < rules.length; i++) {
                if (match[i + 1] !== undefined) {
                    tokenType = rules[i].type;
                    break;
                }
            }

            const matchedText = match[0];
            result += `<span class="token-${tokenType}">${escapeHtml(matchedText)}</span>`;
            lastIndex = masterRegex.lastIndex;
        }

        result += escapeHtml(rawCode.slice(lastIndex));
        return result;
    }

    // Start
    init();

})();
