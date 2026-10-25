const fs = require('fs');
const path = require('path');

const baseDir = fs.existsSync(path.join(__dirname, 'osc'))
    ? path.resolve(__dirname)
    : path.resolve(__dirname, '..');

function readFileSafe(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        console.error('Error reading file:', filePath, e.message);
        return '';
    }
}

const oscPrograms = [
    {
        id: 'osc-1',
        subject: 'osc',
        number: 1,
        title: 'Dynamic Image Slider / Slideshow',
        category: 'Frontend / DOM Manipulation',
        command: 'Open index.html in any web browser',
        summary: 'Cycles through an image array every 2 seconds using setInterval and dynamic DOM manipulation.',
        executionGuide: '1. Place images (me and my shadow.jpg, ak.jpg, tea.jpg) inside the assets/ folder.\n2. Open index.html in Chrome, Edge, or Firefox.\n3. The slideshow automatically transitions every 2 seconds.',
        files: [
            {
                name: 'app.js',
                language: 'javascript',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 1', 'app.js'))
            },
            {
                name: 'index.html',
                language: 'html',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 1', 'index.html'))
            },
            {
                name: 'style.css',
                language: 'css',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 1', 'style.css'))
            }
        ]
    },
    {
        id: 'osc-2',
        subject: 'osc',
        number: 2,
        title: 'Electricity Bill Calculator (Slab Rates)',
        category: 'Server-side PHP',
        command: 'php -S localhost:8000 elecBill.php',
        summary: 'Calculates domestic electricity bill based on tiered tariff slabs using PHP form handling.',
        executionGuide: '1. Start PHP built-in server: php -S localhost:8000 or place in XAMPP htdocs.\n2. Open http://localhost:8000/elecBill.php in browser.\n3. Enter units (e.g. 150) and click Calculate Bill to view total bill amount.',
        files: [
            {
                name: 'elecBill.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 2', 'elecBill.php'))
            }
        ]
    },
    {
        id: 'osc-3',
        subject: 'osc',
        number: 3,
        title: 'Feedback Form with MySQL Database',
        category: 'PHP & MySQL Database',
        command: 'Open in XAMPP/WAMP (port 3308)',
        summary: 'Collects feedback through an HTML form and inserts records into a MySQL database table using mysqli_query.',
        executionGuide: '1. Create database "feedback" and table "remark (name VARCHAR(50), email VARCHAR(50), message TEXT)".\n2. Configure MySQL port (default 3308 in db.php).\n3. Open index.php in browser, submit feedback, and observe success alert.',
        files: [
            {
                name: 'index.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 3', 'index.php'))
            },
            {
                name: 'db.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 3', 'db.php'))
            }
        ]
    },
    {
        id: 'osc-4',
        subject: 'osc',
        number: 4,
        title: 'User Authentication & Session Management',
        category: 'PHP Sessions & Security',
        command: 'Run Apache & MySQL, navigate to login.php',
        summary: 'Implements user authentication with login validation, $_SESSION tracking, dashboard protection, and secure logout.',
        executionGuide: '1. Create database "logindb" with table "users (username VARCHAR(50), password VARCHAR(50))".\n2. Insert a sample user: INSERT INTO users VALUES ("admin", "admin123");\n3. Open login.php, enter credentials, access dashboard.php, and click Logout.',
        files: [
            {
                name: 'login.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 4', 'login.php'))
            },
            {
                name: 'dashboard.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 4', 'dashboard.php'))
            },
            {
                name: 'logout.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 4', 'logout.php'))
            },
            {
                name: 'db.php',
                language: 'php',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm 4', 'db.php'))
            }
        ]
    },
    {
        id: 'osc-5',
        subject: 'osc',
        number: 5,
        title: 'File System Operations using Node.js',
        category: 'Node.js Core Modules',
        command: 'node file.js',
        summary: 'Performs asynchronous file creation, data writing, and reading using Node.js built-in fs module.',
        executionGuide: '1. Open terminal in osc/prgm_5.\n2. Run: node file.js\n3. Verifies file "mca.txt" is created with "Student :: Gopi" and reads its buffer output.',
        files: [
            {
                name: 'file.js',
                language: 'javascript',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_5', 'file.js'))
            },
            {
                name: 'mca.txt',
                language: 'text',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_5', 'mca.txt'))
            }
        ]
    },
    {
        id: 'osc-6',
        subject: 'osc',
        number: 6,
        title: 'Student Registration Web App (Express.js)',
        category: 'Node.js & Express',
        command: 'node server.js',
        installNote: 'Need to install Node.js and Express.js',
        installCommand: 'npm install express',
        summary: 'Express web server serving a registration form and handling POST requests to display student details.',
        executionGuide: '1. Run npm install express.\n2. Run node server.js.\n3. Open http://localhost:3000 in browser.\n4. Enter Name, Roll No, Department and click Register to view output.',
        files: [
            {
                name: 'server.js',
                language: 'javascript',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_6', 'server.js'))
            },
            {
                name: 'index.html',
                language: 'html',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_6', 'index.html'))
            },
            {
                name: 'package.json',
                language: 'json',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_6', 'package.json'))
            }
        ]
    },
    {
        id: 'osc-7',
        subject: 'osc',
        number: 7,
        title: 'Employee CRUD App (Express & MongoDB)',
        category: 'MERN Stack / MongoDB',
        command: 'node server.js',
        installNote: 'Need to install Node.js, Express.js, and Mongoose',
        installCommand: 'npm install express mongoose',
        summary: 'Full CRUD web application with Express and Mongoose to add, display in a table, and delete employee records.',
        executionGuide: '1. Ensure MongoDB service is running on port 27017 (mongod).\n2. Run npm install express mongoose.\n3. Run node server.js.\n4. Open http://localhost:3000, add employee details, click "View Employees", and test delete functionality.',
        files: [
            {
                name: 'server.js',
                language: 'javascript',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_7', 'server.js'))
            },
            {
                name: 'index.html',
                language: 'html',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_7', 'index.html'))
            },
            {
                name: 'package.json',
                language: 'json',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_7', 'package.json'))
            }
        ]
    },
    {
        id: 'osc-8',
        subject: 'osc',
        number: 8,
        title: 'Version Control Workflow using Git',
        category: 'Git & Version Control',
        command: 'Execute in Git Bash or Terminal',
        summary: 'Essential Git commands cheat-sheet for repository initialization, staging, commits, branches, and remotes.',
        executionGuide: '1. Open Git Bash in your project directory.\n2. Run git init to initialize repository.\n3. Run git add . and git commit -m "commit message".\n4. Use git branch and git merge to manage branches.',
        files: [
            {
                name: 'git.txt',
                language: 'bash',
                content: readFileSafe(path.join(baseDir, 'osc', 'prgm_8', 'git.txt'))
            }
        ]
    }
];

const pythonPrograms = [
    {
        id: 'python-1',
        subject: 'python',
        number: 1,
        title: 'Breadth-First Search (BFS) & Depth-First Search (DFS)',
        category: 'Artificial Intelligence / Graph Traversal',
        command: 'python prgm1.py',
        summary: 'Implements BFS traversal using FIFO queue and DFS traversal using LIFO stack on a graph represented as an adjacency list.',
        executionGuide: '1. Open terminal in python folder.\n2. Run: python prgm1.py\n3. Observe BFS traversal and DFS traversal output lists starting from node A.',
        files: [
            {
                name: 'prgm1.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm1.py'))
            }
        ]
    },
    {
        id: 'python-2',
        subject: 'python',
        number: 2,
        title: '8-Puzzle Problem using BFS',
        category: 'State Space Search',
        command: 'python prgm2.py',
        summary: 'Solves the 8-puzzle sliding tile puzzle using Breadth-First Search to find the shortest path from start state to goal state.',
        executionGuide: '1. Run: python prgm2.py\n2. BFS explores moves (Up, Down, Left, Right).\n3. Outputs the total number of moves and prints the board state at every step.',
        files: [
            {
                name: 'prgm2.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm2.py'))
            }
        ]
    },
    {
        id: 'python-3',
        subject: 'python',
        number: 3,
        title: 'A* (A-Star) Search Algorithm',
        category: 'Informed Heuristic Search',
        command: 'python prgm3.py',
        summary: 'Finds optimal path using evaluation function f(n) = g(n) + h(n) with Python heapq priority queue.',
        executionGuide: '1. Run: python prgm3.py\n2. Displays evaluated f(n), g(n), and h(n) values for each visited node.\n3. Prints optimal path: A -> C -> F -> G with total cost: 9.',
        files: [
            {
                name: 'prgm3.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm3.py'))
            }
        ]
    },
    {
        id: 'python-4',
        subject: 'python',
        number: 4,
        title: 'Hill Climbing Search Algorithm',
        category: 'Optimization & Local Search',
        command: 'python prgm4.py',
        summary: 'Maximizes quadratic objective function f(x) = -x² + 10x by comparing left and right neighboring states.',
        executionGuide: '1. Run: python prgm4.py\n2. Step size = 1, starting from x = 0.\n3. Climbs until peak is reached at optimal x = 5 with maximum value 25.',
        files: [
            {
                name: 'prgm4.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm4.py'))
            }
        ]
    },
    {
        id: 'python-5',
        subject: 'python',
        number: 5,
        title: 'Linear Regression (House Price Prediction)',
        category: 'Supervised Learning / Regression',
        command: 'python prgm5.py',
        summary: 'Trains LinearRegression model on house size vs price, prints slope/intercept, predicts price for 1525 sq.ft, and plots data.',
        executionGuide: '1. Requires: pip install numpy matplotlib scikit-learn.\n2. Run: python prgm5.py\n3. Displays Slope, Intercept, Predicted Price, and opens a Matplotlib regression chart.',
        files: [
            {
                name: 'prgm5.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm5.py'))
            }
        ]
    },
    {
        id: 'python-6',
        subject: 'python',
        number: 6,
        title: 'Logistic Regression (Email Spam Classifier)',
        category: 'NLP & Binary Classification',
        command: 'python prgm6.py',
        summary: 'Converts text messages into bag-of-words using CountVectorizer and trains Logistic Regression to classify spam emails.',
        executionGuide: '1. Requires: pip install scikit-learn.\n2. Run: python prgm6.py\n3. Evaluates test email "Free prize available now" and classifies it as SPAM (1).',
        files: [
            {
                name: 'prgm6.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm6.py'))
            }
        ]
    },
    {
        id: 'python-7',
        subject: 'python',
        number: 7,
        title: 'Support Vector Machine (SVM) on Iris Dataset',
        category: 'Supervised Classification & Metrics',
        command: 'python prgm7.py',
        summary: 'Trains linear SVC on 80% train / 20% test Iris dataset. Computes Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.',
        executionGuide: '1. Requires: pip install scikit-learn.\n2. Run: python prgm7.py\n3. Prints training/testing split count, actual vs predicted classes, accuracy %, and confusion matrix.',
        files: [
            {
                name: 'prgm7.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm7.py'))
            }
        ]
    },
    {
        id: 'python-8',
        subject: 'python',
        number: 8,
        title: 'K-Nearest Neighbors (KNN) using Loan Dataset',
        category: 'KNN Classification & Scaling',
        command: 'python prgm8.py',
        summary: 'Loads loan applicant CSV dataset, scales features with StandardScaler, trains KNN (k=5), and predicts approval for new applicant.',
        executionGuide: '1. Ensure loan_data_100_records.csv is in the python/prgm8 folder.\n2. Run: python prgm8.py\n3. Displays dataset head, test accuracy %, confusion matrix, and new applicant loan decision.',
        files: [
            {
                name: 'prgm8.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm8', 'prgm8.py'))
            },
            {
                name: 'loan_data_100_records.csv',
                language: 'text',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm8', 'loan_data_100_records.csv'))
            }
        ]
    },
    {
        id: 'python-9',
        subject: 'python',
        number: 9,
        title: 'Feedforward Neural Network using TensorFlow',
        category: 'Deep Learning / Artificial Neural Networks',
        command: 'python prgm9.py',
        summary: 'Builds MLP with Keras Dense layers (8-relu, 4-relu, 1-sigmoid) to predict diabetes risk probability from glucose, BMI, and age.',
        executionGuide: '1. Requires: pip install tensorflow scikit-learn numpy.\n2. Run: python prgm9.py\n3. Trains for 50 epochs, evaluates test accuracy, and outputs risk prediction for patient (High Risk / Low Risk).',
        files: [
            {
                name: 'prgm9.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm9.py'))
            }
        ]
    },
    {
        id: 'python-10',
        subject: 'python',
        number: 10,
        title: 'Convolutional Neural Network (CNN) - MNIST Digits',
        category: 'Deep Learning / Computer Vision',
        command: 'python prgm10.py',
        summary: 'Constructs CNN with Conv2D, MaxPooling2D, and Dense layers to classify handwritten digits (0-9) from MNIST dataset.',
        executionGuide: '1. Requires: pip install tensorflow matplotlib numpy.\n2. Run: python prgm10.py\n3. Loads MNIST, normalizes pixel data, trains CNN for 2 epochs, evaluates accuracy, and plots random test digit prediction.',
        files: [
            {
                name: 'prgm10.py',
                language: 'python',
                content: readFileSafe(path.join(baseDir, 'python', 'prgm10.py'))
            }
        ]
    }
];

const fileContent = `// Semester Practical Hub - Complete Programs Data
const PRACTICAL_DATA = {
    osc: ${JSON.stringify(oscPrograms, null, 2)},
    python: ${JSON.stringify(pythonPrograms, null, 2)}
};
`;

fs.writeFileSync(path.join(__dirname, 'programs-data.js'), fileContent, 'utf-8');
if (__dirname !== baseDir) {
    fs.writeFileSync(path.join(baseDir, 'programs-data.js'), fileContent, 'utf-8');
}
console.log('Successfully generated programs-data.js in both locations!');

