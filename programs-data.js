// Semester Practical Hub - Complete Programs Data
const PRACTICAL_DATA = {
    osc: [
  {
    "id": "osc-1",
    "subject": "osc",
    "number": 1,
    "title": "Dynamic Image Slider / Slideshow",
    "category": "Frontend / DOM Manipulation",
    "command": "Open index.html in any web browser",
    "summary": "Cycles through an image array every 2 seconds using setInterval and dynamic DOM manipulation.",
    "executionGuide": "1. Place images (me and my shadow.jpg, ak.jpg, tea.jpg) inside the assets/ folder.\n2. Open index.html in Chrome, Edge, or Firefox.\n3. The slideshow automatically transitions every 2 seconds.",
    "files": [
      {
        "name": "app.js",
        "language": "javascript",
        "content": "let images = [\"./assets/me and my shadow.jpg\", \"./assets/ak.jpg\", \"./assets/tea.jpg\"];\r\nlet img = document.getElementById(\"img1\");\r\nlet slide = 0;\r\n\r\nlet imageChange = () => {\r\n    slide++;\r\n    if (slide >= images.length) {\r\n        slide = 0;\r\n    }\r\n    img.src = images[slide];\r\n}\r\nsetInterval(imageChange, 2000);\r\n\r\n// setInterval(() => {\r\n//     slide++;\r\n//     if (slide >= images.length) {\r\n//         slide = 0;\r\n//     }\r\n//     img.src = images[slide];\r\n// }, 2000);\r\n"
      },
      {
        "name": "index.html",
        "language": "html",
        "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <link rel=\"stylesheet\" href=\"./style.css\">\r\n    <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n    <img src=\"./assets/me and my shadow.jpg\" id=\"img1\" alt=\"Loading...\">\r\n    <!-- <img src=\"./assets/ak.jpg\" alt=\"Loading...\">\r\n    <img src=\"./assets/tea.jpg\" alt=\"Loading...\"> -->\r\n    <script src=\"./app.js\"></script>\r\n</body>\r\n\r\n</html>"
      },
      {
        "name": "style.css",
        "language": "css",
        "content": "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: black;\r\n}\r\n\r\nimg {\r\n    /* display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\r\n    width: 20%;\r\n    height: 100%;\r\n    border-radius: 20px;\r\n    margin: 10px;\r\n}\r\n"
      }
    ]
  },
  {
    "id": "osc-2",
    "subject": "osc",
    "number": 2,
    "title": "Electricity Bill Calculator (Slab Rates)",
    "category": "Server-side PHP",
    "command": "php -S localhost:8000 elecBill.php",
    "summary": "Calculates domestic electricity bill based on tiered tariff slabs using PHP form handling.",
    "executionGuide": "1. Start PHP built-in server: php -S localhost:8000 or place in XAMPP htdocs.\n2. Open http://localhost:8000/elecBill.php in browser.\n3. Enter units (e.g. 150) and click Calculate Bill to view total bill amount.",
    "files": [
      {
        "name": "elecBill.php",
        "language": "php",
        "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Electricity Bill Generator</title>\r\n    <style>\r\n        body{\r\n            font-family: Arial, sans-serif;\r\n            text-align:center;\r\n            background:#f4f4f4;\r\n        }\r\n\r\n        .container{\r\n            margin-top:30px;\r\n        }\r\n\r\n        input{\r\n            padding:8px;\r\n            margin:5px;\r\n            width:200px;\r\n        }\r\n\r\n        button{\r\n            padding:8px 15px;\r\n            margin-top:10px;\r\n            cursor:pointer;\r\n        }\r\n\r\n        .bill{\r\n            width:550px;\r\n            margin:30px auto;\r\n            background:white;\r\n            border:2px solid #999;\r\n            padding:25px;\r\n            text-align:left;\r\n        }\r\n\r\n        .bill h2{\r\n            text-align:center;\r\n            margin-bottom:20px;\r\n        }\r\n\r\n        .row{\r\n            display:flex;\r\n            justify-content:space-between;\r\n            padding:8px 0;\r\n            font-size:18px;\r\n        }\r\n\r\n        hr{\r\n            margin:15px 0;\r\n        }\r\n\r\n        .total{\r\n            color:#c0392b;\r\n            font-size:28px;\r\n            font-weight:bold;\r\n        }\r\n\r\n        .footer{\r\n            text-align:center;\r\n            margin-top:15px;\r\n            color:#555;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n\r\n<div class=\"container\">\r\n    <h1>Electricity Bill Generator</h1>\r\n\r\n    <form method=\"post\">\r\n        <label>Consumer Name:</label>\r\n        <input type=\"text\" name=\"name\" required><br>\r\n\r\n        <label>Units Consumed:</label>\r\n        <input type=\"number\" name=\"units\" required><br>\r\n\r\n        <button type=\"submit\">Generate Bill</button>\r\n    </form>\r\n</div>\r\n\r\n<?php\r\n\r\nif(isset($_POST['units']))\r\n{\r\n    $name = $_POST['name'];\r\n    $units = $_POST['units'];\r\n\r\n    // Energy Charge Calculation\r\n    if($units <= 100)\r\n    {\r\n        $energy = $units * 5;\r\n    }\r\n    elseif($units <= 200)\r\n    {\r\n        $energy = (100 * 5) + (($units - 100) * 7);\r\n    }\r\n    elseif($units <= 300)\r\n    {\r\n        $energy = (100 * 5) + (100 * 7) + (($units - 200) * 10);\r\n    }\r\n    else\r\n    {\r\n        $energy = (100 * 5) + (100 * 7) + (100 * 10) + (($units - 300) * 12);\r\n    }\r\n\r\n    $fixed = 50;\r\n    $total = $energy + $fixed;\r\n?>\r\n\r\n<div class=\"bill\">\r\n\r\n    <h2>TNEB ELECTRICITY BILL</h2>\r\n    <hr>\r\n\r\n    <div class=\"row\">\r\n        <strong>Consumer Name</strong>\r\n        <span><?php echo strtoupper($name); ?></span>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <strong>Units Consumed</strong>\r\n        <span><?php echo $units; ?> Units</span>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <strong>Energy Charges</strong>\r\n        <span>₹ <?php echo number_format($energy,2); ?></span>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <strong>Fixed Charges</strong>\r\n        <span>₹ <?php echo number_format($fixed,2); ?></span>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"row total\">\r\n        <span>Total Bill Amount</span>\r\n        <span>₹ <?php echo number_format($total,2); ?></span>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"footer\">\r\n        Thank You - Pay Before Due Date\r\n    </div>\r\n\r\n</div>\r\n\r\n<?php\r\n}\r\n?>\r\n\r\n</body>\r\n</html>"
      }
    ]
  },
  {
    "id": "osc-3",
    "subject": "osc",
    "number": 3,
    "title": "Feedback Form with MySQL Database",
    "category": "PHP & MySQL Database",
    "command": "Open in XAMPP/WAMP (port 3308)",
    "summary": "Collects feedback through an HTML form and inserts records into a MySQL database table using mysqli_query.",
    "executionGuide": "1. Create database \"feedback\" and table \"remark (name VARCHAR(50), email VARCHAR(50), message TEXT)\".\n2. Configure MySQL port (default 3308 in db.php).\n3. Open index.php in browser, submit feedback, and observe success alert.",
    "files": [
      {
        "name": "index.php",
        "language": "php",
        "content": "<?php\r\ninclude(\"db.php\");\r\n?>\r\n<?php\r\nif (isset($_POST[\"submit\"])) {\r\n    $name = $_POST[\"name\"];\r\n    $email = $_POST[\"email\"];\r\n    $message = $_POST[\"message\"];\r\n\r\n    $sql = \"INSERT INTO remark (name, email, message) VALUES ('$name', '$email', '$message')\";\r\n    if (mysqli_query($conn, $sql)) {\r\n        echo ('<script>alert(\"Feedback submitted successfully!\");</script>');\r\n    } else {\r\n        echo \"Error: \" . mysqli_error($conn);\r\n    }\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n    <form method=\"post\">\r\n        Name\r\n        <input type=\"text\" name=\"name\" required>\r\n        Email\r\n        <input type=\"text\" name=\"email\" required>\r\n        Feedback\r\n        <textarea name=\"message\" rows=\"5\" cols=\"5\"></textarea>\r\n        <input type=\"submit\" name=\"submit\">\r\n    </form>\r\n</body>\r\n\r\n</html>"
      },
      {
        "name": "db.php",
        "language": "php",
        "content": "<?php\r\n$servername=\"localhost\";\r\n$username=\"root\";\r\n$password=\"\";\r\n$database=\"feedback\";\r\n$port= 3308;\r\n\r\n$conn = mysqli_connect($servername, $username, $password, $database, $port);\r\n\r\nif($conn){\r\n    echo \"Connection successful\";\r\n}\r\nelse{\r\n    die(\"Connection failed: \" . mysqli_connect_error());\r\n}\r\n?>"
      }
    ]
  },
  {
    "id": "osc-4",
    "subject": "osc",
    "number": 4,
    "title": "User Authentication & Session Management",
    "category": "PHP Sessions & Security",
    "command": "Run Apache & MySQL, navigate to login.php",
    "summary": "Implements user authentication with login validation, $_SESSION tracking, dashboard protection, and secure logout.",
    "executionGuide": "1. Create database \"logindb\" with table \"users (username VARCHAR(50), password VARCHAR(50))\".\n2. Insert a sample user: INSERT INTO users VALUES (\"admin\", \"admin123\");\n3. Open login.php, enter credentials, access dashboard.php, and click Logout.",
    "files": [
      {
        "name": "login.php",
        "language": "php",
        "content": "<?php\r\nsession_start();\r\ninclude 'db.php';\r\nif(isset($_POST['submit'])){\r\n    $username = $_POST['username'];\r\n    $password = $_POST['password'];\r\n\r\n    $sql = \"SELECT * FROM users WHERE username='$username' AND password='$password'\";\r\n\r\n    $result = mysqli_query($conn, $sql);\r\n\r\n    if(mysqli_num_rows($result) == 1){\r\n        $_SESSION[\"username\"] = $username;\r\n        $_SESSION[\"password\"] = $password;\r\n        header(\"Location: dashboard.php\");\r\n        exit();\r\n    } else {\r\n        echo \"Invalid username or password\";\r\n    }\r\n}\r\n\r\n?>\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n    <form method=\"post\">\r\n        Username\r\n        <input type=\"text\" name=\"username\" required>\r\n        Password\r\n        <input type=\"password\" name=\"password\" required>\r\n\r\n        <input type=\"submit\" name=\"submit\" value=\"Login\">\r\n    </form>\r\n</body>\r\n\r\n</html>"
      },
      {
        "name": "dashboard.php",
        "language": "php",
        "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Dashboard</title>\r\n</head>\r\n<body>\r\n    <h1>Dashboard</h1>\r\n    <p>Welcome!</p>\r\n    <a href=\"logout.php\">Logout</a>\r\n</body>\r\n</html>"
      },
      {
        "name": "logout.php",
        "language": "php",
        "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Logout</title>\r\n</head>\r\n\r\n<body>\r\n    <h1>Logout</h1>\r\n    <?php\r\n    session_start();\r\n    if (isset($_SESSION[\"username\"])) {\r\n        unset($_SESSION[\"username\"]);\r\n        session_destroy();\r\n        header(\"Location: login.php\");\r\n        exit();\r\n    }\r\n    ?>\r\n</body>\r\n\r\n</html>"
      },
      {
        "name": "db.php",
        "language": "php",
        "content": "<?php\r\n\r\n$servernmame = \"localhost\";\r\n$usernmae=\"root\";\r\n$password=\"\";\r\n$database=\"logindb\";\r\n$port= 3308;\r\n\r\n$conn = mysqli_connect($servernmame, $usernmae, $password, $database, $port);\r\n\r\nif($conn){\r\n    echo\"Connection successful\";\r\n}\r\nelse{\r\n    die(\"Connection failed: \" . mysqli_connect_error());\r\n}\r\n\r\n?>"
      }
    ]
  },
  {
    "id": "osc-5",
    "subject": "osc",
    "number": 5,
    "title": "File System Operations using Node.js",
    "category": "Node.js Core Modules",
    "command": "node file.js",
    "summary": "Performs asynchronous file creation, data writing, and reading using Node.js built-in fs module.",
    "executionGuide": "1. Open terminal in osc/prgm_5.\n2. Run: node file.js\n3. Verifies file \"mca.txt\" is created with \"Student :: Gopi\" and reads its buffer output.",
    "files": [
      {
        "name": "file.js",
        "language": "javascript",
        "content": "const fs = require(\"fs\");\r\nconst file1=\"mca.txt\";\r\nconst data = \"Student :: Gopi\";\r\n\r\nfs.writeFile(file1,data,function(err)\r\n{\r\n    if(err)\r\n    {\r\n        console.log(err);\r\n    }\r\n    else\r\n    {\r\n        console.log(\"File created successfully\");\r\n    }\r\n\r\nfs.readFile(file1,function(err,data)\r\n{\r\n    if(err)\r\n    {\r\n        console.log(err);\r\n    }\r\n    else\r\n    {\r\n     console.log(data);\r\n  }\r\n});\r\n});\r\n\r\n console.log(data);"
      },
      {
        "name": "mca.txt",
        "language": "text",
        "content": "Student :: Gopi"
      }
    ]
  },
  {
    "id": "osc-6",
    "subject": "osc",
    "number": 6,
    "title": "Student Registration Web App (Express.js)",
    "category": "Node.js & Express",
    "command": "node server.js",
    "installNote": "Need to install Node.js and Express.js",
    "installCommand": "npm install express",
    "summary": "Express web server serving a registration form and handling POST requests to display student details.",
    "executionGuide": "1. Run npm install express.\n2. Run node server.js.\n3. Open http://localhost:3000 in browser.\n4. Enter Name, Roll No, Department and click Register to view output.",
    "files": [
      {
        "name": "server.js",
        "language": "javascript",
        "content": "const express = require('express');\r\nconst app = express();\r\n\r\napp.use(express.urlencoded({ extended: true }));\r\n\r\napp.get('/', (req, res) => {\r\n    res.sendFile(__dirname + '/index.html');\r\n});\r\n\r\napp.post('/view', (req, res) => {\r\n    var name = req.body.name;\r\n    var rollno = req.body.rollno;\r\n    var department = req.body.department;\r\n    res.send(`<h1>Student Information</h1><p>Name: ${name}</p><p>Roll No: ${rollno}</p><p>Department: ${department}</p>`);\r\n});\r\n\r\n\r\n\r\napp.listen(3000, () => {\r\n    console.log('Server is running on port 3000');\r\n});\r\n\r\n/*\r\n------------------------------------------------------------\r\nNOTE: Need to install Node.js and Express.js\r\nInstallation & Run Commands:\r\n------------------------------------------------------------\r\n1. Install Express.js:\r\n   npm install express\r\n\r\n2. Run the program:\r\n   node server.js\r\n------------------------------------------------------------\r\n*/\r"
      },
      {
        "name": "index.html",
        "language": "html",
        "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Student-Registration</title>\r\n</head>\r\n\r\n<body>\r\n    <h1>Student Registration</h1>\r\n    <form action=\"/view\" method=\"POST\">\r\n        <label>Name:</label>\r\n        <input type=\"text\" name=\"name\" id=\"name\" value=\"\" placeholder=\"Enter your name\" required />\r\n        <label>Roll No:</label>\r\n        <input type=\"text\" name=\"rollno\" id=\"rollno\" value=\"\" placeholder=\"Enter your roll number\" required />\r\n        <label>Department:</label>\r\n        <input type=\"text\" name=\"department\" id=\"department\" value=\"\" placeholder=\"Enter your department\" required />\r\n        <button type=\"submit\" value=\"submit\">Register</button>\r\n    </form>\r\n</body>\r\n\r\n</html>"
      },
      {
        "name": "package.json",
        "language": "json",
        "content": "{\n  \"dependencies\": {\n    \"express\": \"^5.2.1\"\n  }\n}\n"
      }
    ]
  },
  {
    "id": "osc-7",
    "subject": "osc",
    "number": 7,
    "title": "Employee CRUD App (Express & MongoDB)",
    "category": "MERN Stack / MongoDB",
    "command": "node server.js",
    "installNote": "Need to install Node.js, Express.js, and Mongoose",
    "installCommand": "npm install express mongoose",
    "summary": "Full CRUD web application with Express and Mongoose to add, display in a table, and delete employee records.",
    "executionGuide": "1. Ensure MongoDB service is running on port 27017 (mongod).\n2. Run npm install express mongoose.\n3. Run node server.js.\n4. Open http://localhost:3000, add employee details, click \"View Employees\", and test delete functionality.",
    "files": [
      {
        "name": "server.js",
        "language": "javascript",
        "content": "const express = require('express');\r\nconst mongoose = require('mongoose');\r\nconst app = express();\r\napp.use(express.urlencoded({\r\n    extended: true\r\n}));\r\n\r\nmongoose.connect('mongodb://localhost:27017/employee')\r\n    .then(() => { console.log('MongoDB Connected') })\r\n    .catch((err) => { console.log(err) });\r\n\r\nconst employeeSchema = new mongoose.Schema({\r\n    empid: String,\r\n    name: String,\r\n    department: String,\r\n});\r\n\r\nconst Employee = mongoose.model('Employee', employeeSchema);\r\n\r\napp.get('/', (req, res) => {\r\n    res.sendFile(__dirname + \"/index.html\")\r\n});\r\n\r\napp.post(\"/add\", async (req, res) => {\r\n    try {\r\n        await Employee.create({\r\n            empid: req.body.empid,\r\n            name: req.body.name,\r\n            department: req.body.department\r\n        });\r\nres.redirect(\"/view\");\r\n    }\r\n    catch (err) {\r\n        res.send(err);\r\n    }\r\n});\r\n\r\napp.get(\"/view\", async (req, res) => {\r\n    const employee = await Employee.find();\r\n    let result = `<table>\r\n        <tr>\r\n            <th>Employee ID</th>\r\n            <th>Name</th>\r\n            <th>Department</th>\r\n            <th>Action</th>\r\n        </tr>`;\r\n    employee.forEach(emp => {\r\n        result += `<tr>\r\n            <td>${emp.empid}</td>\r\n            <td>${emp.name}</td>\r\n            <td>${emp.department}</td>\r\n            <td><a href=\"/delete/${emp._id}\">Delete</a></td>\r\n        </tr>`;\r\n    });\r\n    result += `</table>`;\r\n    res.send(result);\r\n});\r\n\r\napp.get(\"/delete/:id\", async (req, res) => {\r\n    try {\r\n        await Employee.findByIdAndDelete(req.params.id);\r\n        res.redirect(\"/view\");\r\n    }\r\n    catch (err) {\r\n        res.send(err);\r\n    }\r\n});\r\n\r\napp.listen(3000, () => {\r\n    console.log('Server is running on your port');\r\n});\r\n\r\n/*\r\n------------------------------------------------------------\r\nNOTE: Need to install Mongoose, Node.js, and Express.js\r\nInstallation & Run Commands:\r\n------------------------------------------------------------\r\n1. Install Express & Mongoose:\r\n   npm install express mongoose\r\n\r\n2. Ensure MongoDB service is running (e.g., mongod or MongoDB service)\r\n\r\n3. Run the program:\r\n   node server.js\r\n------------------------------------------------------------\r\n*/\r"
      },
      {
        "name": "index.html",
        "language": "html",
        "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    \r\n    <form action=\"/add\" method =\"post\">\r\n        Employee ID\r\n        <input type =\"text\" name=\"empid\" value=\"\" placeholder =\"enter the employee id\" required>\r\n          Employee name\r\n        <input type =\"text\" name=\"name\" value=\"\" placeholder =\"enter the employee name\" required>\r\n          Employee department\r\n        <input type =\"text\" name=\"department\" value=\"\" placeholder =\"enter the department\" required>\r\n\r\n        <input type =\"Submit\" value=\"Add Employee\">\r\n\r\n        <a href=\"/view\">View Employees</a>\r\n    </form>\r\n</body>\r\n</html>"
      },
      {
        "name": "package.json",
        "language": "json",
        "content": "{\n  \"dependencies\": {\n    \"express\": \"^5.2.1\",\n    \"mongoose\": \"^8.8.4\"\n  }\n}\n"
      }
    ]
  },
  {
    "id": "osc-8",
    "subject": "osc",
    "number": 8,
    "title": "Version Control Workflow using Git",
    "category": "Git & Version Control",
    "command": "Execute in Git Bash or Terminal",
    "summary": "Essential Git commands cheat-sheet for repository initialization, staging, commits, branches, and remotes.",
    "executionGuide": "1. Open Git Bash in your project directory.\n2. Run git init to initialize repository.\n3. Run git add . and git commit -m \"commit message\".\n4. Use git branch and git merge to manage branches.",
    "files": [
      {
        "name": "git.txt",
        "language": "bash",
        "content": "# Open Source Course (OSC) - Practical 8: Version Control using Git\n\n# 1. Git Setup & Configuration\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\ngit config --list\n\n# 2. Initializing a Repository\ngit init\ngit status\n\n# 3. Staging and Committing Changes\ngit add index.html\ngit add .\ngit commit -m \"Initial commit for practical project\"\n\n# 4. View History and Changes\ngit log --oneline --graph --decorate\ngit diff\n\n# 5. Branching & Merging\ngit branch feature-login\ngit checkout feature-login\n# (Make edits...)\ngit add .\ngit commit -m \"Added login feature\"\ngit checkout main\ngit merge feature-login\ngit branch -d feature-login\n\n# 6. Remote Repository Operations (GitHub / GitLab)\ngit remote add origin https://github.com/your-username/practical-repo.git\ngit branch -M main\ngit push -u origin main\ngit pull origin main\ngit clone https://github.com/your-username/practical-repo.git\n"
      }
    ]
  }
],
    python: [
  {
    "id": "python-1",
    "subject": "python",
    "number": 1,
    "title": "Breadth-First Search (BFS) & Depth-First Search (DFS)",
    "category": "Artificial Intelligence / Graph Traversal",
    "command": "python prgm1.py",
    "summary": "Implements BFS traversal using FIFO queue and DFS traversal using LIFO stack on a graph represented as an adjacency list.",
    "executionGuide": "1. Open terminal in python folder.\n2. Run: python prgm1.py\n3. Observe BFS traversal and DFS traversal output lists starting from node A.",
    "files": [
      {
        "name": "prgm1.py",
        "language": "python",
        "content": "graph = {\r\n'A': ['B', 'C'],\r\n'B': ['D', 'E'],\r\n'C': ['F'],\r\n'D': [],\r\n'E': ['G'], \r\n'F': [],\r\n'G': []\r\n}\r\n\r\n# Breadth-First Search (BFS)\r\ndef bfs(graph, start):\r\n    visited = []\r\n    queue = [start]\r\n    \r\n    while queue:\r\n        node = queue.pop(0) # Remove first element\r\n        \r\n        if node not in visited:\r\n            visited.append(node)\r\n            queue.extend(graph[node])\r\n\r\n    return visited\r\n\r\n# Depth-First Search (DFS)\r\ndef dfs(graph, start):\r\n    visited = []\r\n    stack = [start]\r\n\r\n    while stack:\r\n        node = stack.pop() # Remove last element\r\n\r\n    if node not in visited:\r\n        visited.append(node)\r\n\r\n        # Reverse to maintain left-to-right traversal\r\n        stack.extend(reversed(graph[node]))\r\n\r\n    return visited\r\n\r\n# Main Program\r\nstart_node = 'A'\r\nprint(\"Breadth-First Search (BFS):\")\r\nprint(bfs(graph, start_node))\r\nprint(\"\\nDepth-First Search (DFS):\")\r\nprint(dfs(graph, start_node))"
      }
    ]
  },
  {
    "id": "python-2",
    "subject": "python",
    "number": 2,
    "title": "8-Puzzle Problem using BFS",
    "category": "State Space Search",
    "command": "python prgm2.py",
    "summary": "Solves the 8-puzzle sliding tile puzzle using Breadth-First Search to find the shortest path from start state to goal state.",
    "executionGuide": "1. Run: python prgm2.py\n2. BFS explores moves (Up, Down, Left, Right).\n3. Outputs the total number of moves and prints the board state at every step.",
    "files": [
      {
        "name": "prgm2.py",
        "language": "python",
        "content": "from collections import deque\r\n\r\ngoal_state =[\r\n    [1,2,3],\r\n    [4,5,6],\r\n    [7,8,0]\r\n]\r\n\r\ndef to_tuple(state):\r\n    return tuple(tuple(row) for row in state)\r\n\r\ndef find_blank(state):\r\n    for i in range(3):\r\n        for j in range(3):\r\n            if state[i][j] == 0:\r\n                return (i, j)\r\n\r\ndef get_neighbors(state):\r\n    neighbors = []\r\n    x,y = find_blank(state)\r\n    \r\n    moves = [(-1,0), (1,0), (0,-1), (0,1)] # Up, Down, Left, Right\r\n    \r\n    for dx, dy in moves:\r\n        new_x = x+dx\r\n        new_y = y+dy\r\n        \r\n        if 0 <= new_x < 3 and 0 <= new_y < 3:\r\n            new_state = [row[:] for row in state]\r\n            \r\n            new_state[x][y], new_state[new_x][new_y] = \\\r\n                new_state[new_x][new_y], new_state[x][y]\r\n            \r\n            neighbors.append(new_state)\r\n    return neighbors\r\n\r\ndef solve_puzzle(start_state):\r\n    queue = deque()\r\n    visited = set()\r\n    \r\n    queue.append((start_state, []))\r\n    visited.add(to_tuple(start_state))\r\n    \r\n    while queue:\r\n        current_state, path = queue.popleft()\r\n        \r\n        if current_state == goal_state:\r\n            return path + [current_state]\r\n        \r\n        for neighbor in get_neighbors(current_state):\r\n            if to_tuple(neighbor) not in visited:\r\n                visited.add(to_tuple(neighbor))\r\n                queue.append((neighbor, path + [current_state]))\r\n    return None\r\n\r\ndef print_state(state):\r\n    for row in state:\r\n        print(row)\r\n    print()\r\n\r\nstart_state = [\r\n    [1,0,3],\r\n    [4,2,6],\r\n    [7,5,8]\r\n]\r\n\r\nsolution = solve_puzzle(start_state)\r\n\r\nif solution:\r\n    print(\"Solution Found!!\")\r\n    print(\"Number of moves:\", len(solution)-1)\r\n    \r\n    for step, state in enumerate(solution):\r\n        print(\"\\nStep\", step)\r\n        print_state(state)\r\n    else:\r\n        print(\"No solution Found.\")   "
      }
    ]
  },
  {
    "id": "python-3",
    "subject": "python",
    "number": 3,
    "title": "A* (A-Star) Search Algorithm",
    "category": "Informed Heuristic Search",
    "command": "python prgm3.py",
    "summary": "Finds optimal path using evaluation function f(n) = g(n) + h(n) with Python heapq priority queue.",
    "executionGuide": "1. Run: python prgm3.py\n2. Displays evaluated f(n), g(n), and h(n) values for each visited node.\n3. Prints optimal path: A -> C -> F -> G with total cost: 9.",
    "files": [
      {
        "name": "prgm3.py",
        "language": "python",
        "content": "import heapq\r\n\r\ngraph = {\r\n    'A': [('B', 2), ('C', 4)],\r\n    'B': [('D', 7), ('E', 3)],\r\n    'C': [('F', 2)],\r\n    'D': [('G', 1)],\r\n    'E': [('G', 5)],\r\n    'F': [('G', 3)],\r\n    'G': []\r\n}\r\n\r\nheuristic = {\r\n    'A': 9,\r\n    'B': 8,\r\n    'C': 5,\r\n    'D': 1,\r\n    'E': 5,\r\n    'F': 3,\r\n    'G': 0\r\n}\r\n\r\ndef astar(start, goal):\r\n    queue = []\r\n    # (f, g, current, path)\r\n    heapq.heappush(queue, (heuristic[start] + 0, 0, start, [start]))\r\n    visited = set()\r\n\r\n    while queue:\r\n        f, g, current, path = heapq.heappop(queue)\r\n\r\n        if current in visited:\r\n            continue\r\n            \r\n        print(f\"Current Node: {current}\")\r\n        print(f\"g(n) = {g}\")\r\n        print(f\"h(n) = {heuristic[current]}\")\r\n        print(f\"f(n) = {f}\\n\")\r\n        \r\n        visited.add(current)\r\n        \r\n        if current == goal:\r\n            return path, g\r\n        \r\n        for neighbor, cost in graph[current]:\r\n            if neighbor not in visited:\r\n                new_g = g + cost\r\n                new_f = new_g + heuristic[neighbor]\r\n                heapq.heappush(queue, (new_f, new_g, neighbor, path + [neighbor]))\r\n                \r\n    return None, None\r\n\r\nstart = 'A'\r\ngoal = 'G'\r\n\r\npath, total_cost = astar(start, goal)\r\n\r\nprint(\"-------------\")\r\nprint(\"Optimal Path:\", ' -> '.join(path))\r\nprint(\"Total Cost:\", total_cost)"
      }
    ]
  },
  {
    "id": "python-4",
    "subject": "python",
    "number": 4,
    "title": "Hill Climbing Search Algorithm",
    "category": "Optimization & Local Search",
    "command": "python prgm4.py",
    "summary": "Maximizes quadratic objective function f(x) = -x² + 10x by comparing left and right neighboring states.",
    "executionGuide": "1. Run: python prgm4.py\n2. Step size = 1, starting from x = 0.\n3. Climbs until peak is reached at optimal x = 5 with maximum value 25.",
    "files": [
      {
        "name": "prgm4.py",
        "language": "python",
        "content": "def objective_function(x):\r\n    return -x*x+10*x\r\n\r\ndef hill_climbing(start):\r\n    current = start\r\n    step_size = 1\r\n    \r\n    while True:\r\n        left = current - step_size\r\n        right = current + step_size\r\n        \r\n        current_value = objective_function(current)\r\n        left_value = objective_function(left)\r\n        right_value = objective_function(right)\r\n        \r\n        print(\"Current x =\", current, \"Objective Value =\", current_value)\r\n        \r\n        if left_value > current_value:\r\n            current = left\r\n            \r\n        elif right_value > current_value:\r\n            current = right\r\n        \r\n        else:\r\n            return current, current_value\r\n\r\nstart_point = 0\r\n\r\nbest_x, best_value = hill_climbing(start_point)\r\n\r\nprint(\"\\nBest Solution Found:\")\r\nprint(\"Optimal x =\", best_x)\r\nprint(\"Maximum Value =\", best_value)\r\n"
      }
    ]
  },
  {
    "id": "python-5",
    "subject": "python",
    "number": 5,
    "title": "Linear Regression (House Price Prediction)",
    "category": "Supervised Learning / Regression",
    "command": "python prgm5.py",
    "summary": "Trains LinearRegression model on house size vs price, prints slope/intercept, predicts price for 1525 sq.ft, and plots data.",
    "executionGuide": "1. Requires: pip install numpy matplotlib scikit-learn.\n2. Run: python prgm5.py\n3. Displays Slope, Intercept, Predicted Price, and opens a Matplotlib regression chart.",
    "files": [
      {
        "name": "prgm5.py",
        "language": "python",
        "content": "import numpy as np\r\nimport matplotlib.pyplot as plt\r\nfrom sklearn.linear_model import LinearRegression\r\n\r\n# Independent Variable (House Size)\r\nX = np.array([800, 1000, 1200, 1400, 1600, 1800]).reshape(-1, 1)\r\n\r\n# Dependent Variable (House Price)\r\nY = np.array([35, 45, 55, 65, 75, 85])\r\n\r\n# Create the model\r\nmodel = LinearRegression()\r\n\r\n# Train the model\r\nmodel.fit(X, Y)\r\n\r\n# Predict values\r\npredicted = model.predict(X)\r\n\r\n# Display model parameters\r\nprint(\"Slope (m):\", model.coef_[0])\r\nprint(\"Intercept (c):\", model.intercept_)\r\n\r\n# Predict the price of a 1525 sq.ft house\r\nnew_house = np.array([[1525]])\r\npredicted_price = model.predict(new_house)\r\n\r\nprint(\"Predicted Price for 1525 sq.ft house:\", predicted_price[0])\r\n\r\n# Plot actual data\r\nplt.scatter(X, Y, color=\"blue\", label=\"Actual Data\")\r\n\r\n# Plot regression line\r\nplt.plot(X, predicted, color=\"red\", linewidth=2, label=\"Regression Line\")\r\n\r\n# Labels\r\nplt.title(\"House Size vs House Price\")\r\nplt.xlabel(\"House Size (sq.ft)\")\r\nplt.ylabel(\"House Price (Lakhs)\")\r\nplt.legend()\r\n\r\n# Display graph\r\nplt.show()\r\n"
      }
    ]
  },
  {
    "id": "python-6",
    "subject": "python",
    "number": 6,
    "title": "Logistic Regression (Email Spam Classifier)",
    "category": "NLP & Binary Classification",
    "command": "python prgm6.py",
    "summary": "Converts text messages into bag-of-words using CountVectorizer and trains Logistic Regression to classify spam emails.",
    "executionGuide": "1. Requires: pip install scikit-learn.\n2. Run: python prgm6.py\n3. Evaluates test email \"Free prize available now\" and classifies it as SPAM (1).",
    "files": [
      {
        "name": "prgm6.py",
        "language": "python",
        "content": "from sklearn.feature_extraction.text import CountVectorizer\r\nfrom sklearn.linear_model import LogisticRegression\r\n\r\n# -----------------------------\r\n# Training Data\r\n# -----------------------------\r\ntrain_emails = [\r\n    \"Congratulations! You won a free lottery\",\r\n    \"Claim your prize now\",\r\n    \"Limited time offer\",\r\n    \"Meeting at 10 AM tomorrow\",\r\n    \"Project report submission\",\r\n    \"Please attend the class today\"\r\n]\r\n\r\n# 1 = Spam, 0 = Not Spam\r\ntrain_labels = [1, 1, 1, 0, 0, 0]\r\n\r\nprint(\"===== TRAINING DATA =====\")\r\nfor email, label in zip(train_emails, train_labels):\r\n    print(email, \"-->\", \"Spam\" if label == 1 else \"Not Spam\")\r\n\r\n# Convert text into numerical features\r\nvectorizer = CountVectorizer()\r\nX_train = vectorizer.fit_transform(train_emails)\r\n\r\n# Train Logistic Regression Model\r\nmodel = LogisticRegression()\r\nmodel.fit(X_train, train_labels)\r\n\r\n# -----------------------------\r\n# Testing Data\r\n# -----------------------------\r\ntest_email = [\"Free prize available now\"]\r\n\r\nprint(\"\\n===== TESTING DATA =====\")\r\nprint(test_email[0])\r\n\r\nX_test = vectorizer.transform(test_email)\r\n\r\n# -----------------------------\r\n# Prediction\r\n# -----------------------------\r\nprediction = model.predict(X_test)\r\n\r\nprint(\"\\n===== PREDICTION =====\")\r\nprint(prediction)\r\n\r\n# -----------------------------\r\n# Result\r\n# -----------------------------\r\nprint(\"\\n===== RESULT =====\")\r\nif prediction[0] == 1:\r\n    print(\"The email is classified as SPAM.\")\r\nelse:\r\n    print(\"The email is classified as NOT SPAM.\")"
      }
    ]
  },
  {
    "id": "python-7",
    "subject": "python",
    "number": 7,
    "title": "Support Vector Machine (SVM) on Iris Dataset",
    "category": "Supervised Classification & Metrics",
    "command": "python prgm7.py",
    "summary": "Trains linear SVC on 80% train / 20% test Iris dataset. Computes Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.",
    "executionGuide": "1. Requires: pip install scikit-learn.\n2. Run: python prgm7.py\n3. Prints training/testing split count, actual vs predicted classes, accuracy %, and confusion matrix.",
    "files": [
      {
        "name": "prgm7.py",
        "language": "python",
        "content": "from sklearn.datasets import load_iris\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.svm import SVC\r\nfrom sklearn.metrics import (\r\n    accuracy_score,\r\n    confusion_matrix,\r\n    precision_score,\r\n    recall_score,\r\n    f1_score\r\n)\r\n\r\n# Load Iris Dataset\r\niris = load_iris()\r\n\r\nX = iris.data\r\ny = iris.target\r\n\r\nprint(\"===== IRIS DATASET =====\")\r\nprint(\"Classes:\", iris.target_names)\r\nprint(\"Total Samples:\", len(X))\r\n\r\n# Randomly split the dataset\r\n# 80% Training and 20% Testing\r\nX_train, X_test, y_train, y_test = train_test_split(\r\n    X, y, test_size=0.2\r\n)\r\n\r\nprint(\"\\n===== TRAINING AND TESTING =====\")\r\nprint(\"Training Samples:\", len(X_train))\r\nprint(\"Testing Samples :\", len(X_test))\r\n\r\n# Create SVM Model\r\nmodel = SVC(kernel='linear')\r\n\r\n# Train the Model\r\nmodel.fit(X_train, y_train)\r\n\r\n# Prediction\r\ny_pred = model.predict(X_test)\r\n\r\nprint(\"\\n===== PREDICTION =====\")\r\nprint(\"Actual Classes   :\", y_test)\r\nprint(\"Predicted Classes:\", y_pred)\r\n\r\n# Performance Evaluation\r\naccuracy = accuracy_score(y_test, y_pred)\r\nprecision = precision_score(y_test, y_pred, average='weighted')\r\nrecall = recall_score(y_test, y_pred, average='weighted')\r\nf1 = f1_score(y_test, y_pred, average='weighted')\r\ncm = confusion_matrix(y_test, y_pred)\r\n\r\n# Display Results\r\nprint(\"\\n===== PERFORMANCE =====\")\r\nprint(\"Accuracy  :\", round(accuracy * 100, 2), \"%\")\r\nprint(\"Precision :\", round(precision, 4))\r\nprint(\"Recall    :\", round(recall, 4))\r\nprint(\"F1-Score  :\", round(f1, 4))\r\n\r\nprint(\"\\n===== CONFUSION MATRIX =====\")\r\nprint(cm)"
      }
    ]
  },
  {
    "id": "python-8",
    "subject": "python",
    "number": 8,
    "title": "K-Nearest Neighbors (KNN) using Loan Dataset",
    "category": "KNN Classification & Scaling",
    "command": "python prgm8.py",
    "summary": "Loads loan applicant CSV dataset, scales features with StandardScaler, trains KNN (k=5), and predicts approval for new applicant.",
    "executionGuide": "1. Ensure loan_data_100_records.csv is in the python/prgm8 folder.\n2. Run: python prgm8.py\n3. Displays dataset head, test accuracy %, confusion matrix, and new applicant loan decision.",
    "files": [
      {
        "name": "prgm8.py",
        "language": "python",
        "content": "# KNN using Loan Dataset\r\n\r\nimport pandas as pd\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.preprocessing import LabelEncoder, StandardScaler\r\nfrom sklearn.neighbors import KNeighborsClassifier\r\nfrom sklearn.metrics import accuracy_score, confusion_matrix\r\n\r\n# Step 1: Load Dataset\r\ndata = pd.read_csv(\"loan_data_100_records.csv\")\r\nprint(\"===== LOAN DATASET =====\")\r\nprint(data.head())\r\nprint(\"\\nTotal Records:\", len(data))\r\n\r\n# Step 2: Select Required Columns\r\ndata = data[\r\n    [\"ApplicantIncome\", \"LoanAmount\",\r\n     \"Credit_History\", \"Loan_Status\"]\r\n]\r\n\r\n# Step 3: Remove Missing Values\r\ndata = data.dropna()\r\nprint(\"\\nRecords after removing missing values:\", len(data))\r\n\r\n# Step 4: Convert Target Column into Numbers\r\nencoder = LabelEncoder()\r\ndata[\"Loan_Status\"] = encoder.fit_transform(\r\n    data[\"Loan_Status\"]\r\n)\r\n\r\n# N = 0; Y = 1\r\n\r\n# Step 5: Separate Features and Target\r\nX = data[\r\n    [\"ApplicantIncome\", \"LoanAmount\", \"Credit_History\"]\r\n]\r\n\r\ny = data[\"Loan_Status\"]\r\n\r\n\r\n# Step 6: Split Dataset\r\nX_train, X_test, y_train, y_test = train_test_split(\r\n    X,\r\n    y,\r\n    test_size=0.2,\r\n    random_state=42,\r\n    stratify=y\r\n)\r\n\r\nprint(\"\\nTraining Samples:\", len(X_train))\r\nprint(\"Testing Samples :\", len(X_test))\r\n\r\n# Step 7: Feature Scaling\r\nscaler = StandardScaler()\r\nX_train_scaled = scaler.fit_transform(X_train)\r\nX_test_scaled = scaler.transform(X_test)\r\n\r\n\r\n# Step 8: Create KNN Model\r\nknn = KNeighborsClassifier(n_neighbors=5)\r\n\r\n# Step 9: Train KNN Model\r\nknn.fit(X_train_scaled, y_train)\r\n\r\n# Step 10: Predict Test Data\r\ny_pred = knn.predict(X_test_scaled)\r\nprint(\"\\n===== ACTUAL VS PREDICTED =====\")\r\nresult_table = pd.DataFrame({\r\n    \"Actual\": y_test.values,\r\n    \"Predicted\": y_pred\r\n})\r\n\r\nprint(result_table)\r\n\r\n# Step 11: Evaluate Model\r\naccuracy = accuracy_score(y_test, y_pred)\r\ncm = confusion_matrix(y_test, y_pred)\r\nprint(\"\\n===== MODEL PERFORMANCE =====\")\r\nprint(\"KNN Accuracy:\", round(accuracy * 100, 2), \"%\")\r\nprint(\"\\nConfusion Matrix:\")\r\nprint(cm)\r\n\r\n# Step 12: Test a New Applicant\r\nnew_data = pd.DataFrame(\r\n    [[5000, 150, 1]],\r\n    columns=[\r\n        \"ApplicantIncome\",\r\n        \"LoanAmount\",\r\n        \"Credit_History\"\r\n    ]\r\n)\r\n\r\nprint(\"\\n===== NEW APPLICANT =====\")\r\nprint(new_data)\r\n\r\n# Scale new applicant data\r\nnew_data_scaled = scaler.transform(new_data)\r\n\r\n# Predict Loan Status\r\nprediction = knn.predict(new_data_scaled)\r\n\r\n# Convert prediction back to original label\r\nloan_status = encoder.inverse_transform(prediction)\r\n\r\n# Step 13: Display Final Prediction\r\nif loan_status[0] == \"Y\":\r\n    print(\"\\nLoan Status: Approved\")\r\nelse:\r\n    print(\"\\nLoan Status: Not Approved\")"
      },
      {
        "name": "loan_data_100_records.csv",
        "language": "text",
        "content": "Gender,Married,Education,Self_Employed,Property_Area,ApplicantIncome,LoanAmount,Credit_History,Loan_Status\r\nMale,Yes,Graduate,No,Urban,5000,150,1,Y\r\nFemale,No,Graduate,No,Rural,3500,100,1,Y\r\nMale,Yes,Not Graduate,Yes,Semiurban,6000,200,1,Y\r\nMale,Yes,Graduate,No,Urban,4500,120,1,Y\r\nFemale,No,Graduate,No,Semiurban,3000,80,0,N\r\nMale,Yes,Graduate,Yes,Rural,8000,250,1,Y\r\nMale,No,Not Graduate,No,Urban,4000,130,1,Y\r\nFemale,No,Graduate,No,Semiurban,5500,180,1,Y\r\nMale,Yes,Graduate,Yes,Rural,7000,220,1,Y\r\nMale,Yes,Not Graduate,No,Urban,3200,90,0,N\r\nFemale,No,Graduate,No,Semiurban,6500,200,1,Y\r\nMale,Yes,Graduate,No,Urban,4800,140,1,Y\r\nFemale,Yes,Graduate,Yes,Rural,3800,110,0,N\r\nMale,No,Not Graduate,No,Semiurban,5200,160,1,Y\r\nMale,Yes,Graduate,No,Urban,9000,300,1,Y\r\nFemale,No,Graduate,Yes,Rural,4200,120,1,Y\r\nMale,Yes,Not Graduate,No,Semiurban,7500,240,0,N\r\nFemale,No,Graduate,No,Urban,3600,100,1,Y\r\nMale,Yes,Graduate,No,Rural,6800,210,1,Y\r\nMale,Yes,Graduate,Yes,Semiurban,5800,170,1,Y\r\nMale,Yes,Graduate,No,Urban,5878,149,1,Y\r\nFemale,No,Graduate,No,Rural,2806,129,1,Y\r\nMale,Yes,Not Graduate,Yes,Semiurban,4923,200,1,N\r\nMale,Yes,Graduate,No,Urban,4969,144,1,Y\r\nFemale,No,Graduate,No,Semiurban,3165,63,1,Y\r\nMale,Yes,Graduate,Yes,Rural,9336,236,1,Y\r\nMale,No,Not Graduate,No,Urban,4712,111,1,Y\r\nFemale,No,Graduate,No,Semiurban,4592,203,1,N\r\nMale,Yes,Graduate,Yes,Rural,6504,210,1,Y\r\nMale,Yes,Not Graduate,No,Urban,2629,91,0,N\r\nFemale,No,Graduate,No,Semiurban,6438,242,1,Y\r\nMale,Yes,Graduate,No,Urban,5797,167,1,Y\r\nFemale,Yes,Graduate,Yes,Rural,4276,91,0,Y\r\nMale,No,Not Graduate,No,Semiurban,6151,179,1,Y\r\nMale,Yes,Graduate,No,Urban,9022,319,0,Y\r\nFemale,No,Graduate,Yes,Rural,4694,121,1,Y\r\nMale,Yes,Not Graduate,No,Semiurban,8243,253,1,Y\r\nFemale,No,Graduate,No,Urban,2761,99,0,N\r\nMale,Yes,Graduate,No,Rural,8292,185,0,N\r\nMale,Yes,Graduate,Yes,Semiurban,5287,189,1,Y\r\nMale,Yes,Graduate,No,Urban,5577,146,1,Y\r\nFemale,No,Graduate,No,Rural,2669,80,1,Y\r\nMale,Yes,Not Graduate,Yes,Semiurban,5032,205,0,N\r\nMale,Yes,Graduate,No,Urban,4479,115,1,Y\r\nFemale,No,Graduate,No,Semiurban,2847,64,0,N\r\nMale,Yes,Graduate,Yes,Rural,9998,284,1,N\r\nMale,No,Not Graduate,No,Urban,4713,149,1,Y\r\nFemale,No,Graduate,No,Semiurban,4417,224,1,Y\r\nMale,Yes,Graduate,Yes,Rural,6428,235,0,N\r\nMale,Yes,Not Graduate,No,Urban,3735,103,1,Y\r\nFemale,No,Graduate,No,Semiurban,6963,221,0,N\r\nMale,Yes,Graduate,No,Urban,3710,143,1,Y\r\nFemale,Yes,Graduate,Yes,Rural,3066,118,0,N\r\nMale,No,Not Graduate,No,Semiurban,5562,151,1,Y\r\nMale,Yes,Graduate,No,Urban,11495,305,1,Y\r\nFemale,No,Graduate,Yes,Rural,4274,122,1,Y\r\nMale,Yes,Not Graduate,No,Semiurban,7578,215,1,Y\r\nFemale,No,Graduate,No,Urban,3569,76,1,Y\r\nMale,Yes,Graduate,No,Rural,5625,221,0,N\r\nMale,Yes,Graduate,Yes,Semiurban,5247,189,1,Y\r\nMale,Yes,Graduate,No,Urban,4046,188,0,Y\r\nFemale,No,Graduate,No,Rural,3693,95,1,Y\r\nMale,Yes,Not Graduate,Yes,Semiurban,5547,255,1,Y\r\nMale,Yes,Graduate,No,Urban,4009,152,0,Y\r\nFemale,No,Graduate,No,Semiurban,2968,104,1,Y\r\nMale,Yes,Graduate,Yes,Rural,9919,310,1,Y\r\nMale,No,Not Graduate,No,Urban,4698,145,1,Y\r\nFemale,No,Graduate,No,Semiurban,6384,161,1,Y\r\nMale,Yes,Graduate,Yes,Rural,5723,266,0,N\r\nMale,Yes,Not Graduate,No,Urban,3455,111,0,N\r\nFemale,No,Graduate,No,Semiurban,7654,257,1,Y\r\nMale,Yes,Graduate,No,Urban,3637,123,0,N\r\nFemale,Yes,Graduate,Yes,Rural,3105,113,1,Y\r\nMale,No,Not Graduate,No,Semiurban,4471,191,1,Y\r\nMale,Yes,Graduate,No,Urban,7399,245,1,Y\r\nFemale,No,Graduate,Yes,Rural,3845,122,1,N\r\nMale,Yes,Not Graduate,No,Semiurban,6807,302,0,N\r\nFemale,No,Graduate,No,Urban,3955,81,0,N\r\nMale,Yes,Graduate,No,Rural,8714,226,1,Y\r\nMale,Yes,Graduate,Yes,Semiurban,5841,201,0,Y\r\nMale,Yes,Graduate,No,Urban,6031,178,0,N\r\nFemale,No,Graduate,No,Rural,3792,123,1,Y\r\nMale,Yes,Not Graduate,Yes,Semiurban,5735,197,1,Y\r\nMale,Yes,Graduate,No,Urban,4498,106,0,N\r\nFemale,No,Graduate,No,Semiurban,3597,65,0,N\r\nMale,Yes,Graduate,Yes,Rural,6643,301,1,Y\r\nMale,No,Not Graduate,No,Urban,5026,109,1,Y\r\nFemale,No,Graduate,No,Semiurban,4474,137,0,Y\r\nMale,Yes,Graduate,Yes,Rural,5456,237,1,Y\r\nMale,Yes,Not Graduate,No,Urban,2960,92,1,Y\r\nFemale,No,Graduate,No,Semiurban,5030,170,0,N\r\nMale,Yes,Graduate,No,Urban,5108,137,0,N\r\nFemale,Yes,Graduate,Yes,Rural,3945,89,1,Y\r\nMale,No,Not Graduate,No,Semiurban,6545,129,1,Y\r\nMale,Yes,Graduate,No,Urban,11599,357,1,Y\r\nFemale,No,Graduate,Yes,Rural,4949,99,1,Y\r\nMale,Yes,Not Graduate,No,Semiurban,9162,241,1,Y\r\nFemale,No,Graduate,No,Urban,3228,83,1,Y\r\nMale,Yes,Graduate,No,Rural,5970,200,1,Y\r\nMale,Yes,Graduate,Yes,Semiurban,5560,192,1,N\r\n"
      }
    ]
  },
  {
    "id": "python-9",
    "subject": "python",
    "number": 9,
    "title": "Feedforward Neural Network using TensorFlow",
    "category": "Deep Learning / Artificial Neural Networks",
    "command": "python prgm9.py",
    "summary": "Builds MLP with Keras Dense layers (8-relu, 4-relu, 1-sigmoid) to predict diabetes risk probability from glucose, BMI, and age.",
    "executionGuide": "1. Requires: pip install tensorflow scikit-learn numpy.\n2. Run: python prgm9.py\n3. Trains for 50 epochs, evaluates test accuracy, and outputs risk prediction for patient (High Risk / Low Risk).",
    "files": [
      {
        "name": "prgm9.py",
        "language": "python",
        "content": "# Feedforward Neural Network using TensorFlow\r\nimport numpy as np\r\nimport tensorflow as tf\r\nfrom sklearn.model_selection import train_test_split\r\nfrom sklearn.preprocessing import StandardScaler\r\n\r\n# Create Dataset; Features: Glucose Level, BMI, Age\r\nX = np.array([\r\n    [85, 22.0, 25],\r\n    [90, 23.5, 30],\r\n    [95, 24.0, 28],\r\n    [100, 25.5, 35],\r\n    [105, 26.0, 40],\r\n    [110, 27.5, 45],\r\n    [115, 28.0, 38],\r\n    [120, 29.5, 50],\r\n    [125, 30.0, 42],\r\n    [130, 31.5, 48],\r\n    [135, 32.0, 55],\r\n    [140, 33.0, 52],\r\n    [145, 34.0, 58],\r\n    [150, 35.0, 60],\r\n    [155, 36.0, 62],\r\n    [160, 37.0, 65],\r\n    [165, 38.0, 57],\r\n    [170, 39.0, 68],\r\n    [175, 40.0, 70],\r\n    [180, 41.0, 72]\r\n])\r\n\r\n# Target: 0 = Low Risk, 1 = High Risk\r\ny = np.array([\r\n    0, 0, 0, 0, 0,\r\n    0, 0, 0, 0, 0,\r\n    1, 1, 1, 1, 1,\r\n    1, 1, 1, 1, 1\r\n])\r\n\r\n# Split Dataset\r\nX_train, X_test, y_train, y_test = train_test_split(\r\n    X,\r\n    y,\r\n    test_size=0.2,\r\n    random_state=42,\r\n    stratify=y\r\n)\r\n\r\nprint(\"Training Samples:\", len(X_train))\r\nprint(\"Testing Samples :\", len(X_test))\r\n\r\n# Scale the Features\r\nscaler = StandardScaler()\r\n\r\nX_train_scaled = scaler.fit_transform(X_train)\r\nX_test_scaled = scaler.transform(X_test)\r\n\r\n# Create Feedforward Neural Network\r\nmodel = tf.keras.Sequential([\r\n    tf.keras.layers.Input(shape=(3,)),\r\n    tf.keras.layers.Dense(8, activation=\"relu\"),\r\n    tf.keras.layers.Dense(4, activation=\"relu\"),\r\n    tf.keras.layers.Dense(1, activation=\"sigmoid\")\r\n])\r\n\r\n# Compile the Model\r\nmodel.compile(\r\n    optimizer=\"adam\",\r\n    loss=\"binary_crossentropy\",\r\n    metrics=[\"accuracy\"]\r\n)\r\n\r\n# Train the Model\r\nmodel.fit(\r\n    X_train_scaled,\r\n    y_train,\r\n    epochs=50,\r\n    batch_size=4,\r\n    verbose=0\r\n)\r\n\r\n# Evaluate the Model\r\nloss, accuracy = model.evaluate(\r\n    X_test_scaled,\r\n    y_test,\r\n    verbose=0\r\n)\r\n\r\nprint(\"\\n===== MODEL PERFORMANCE =====\")\r\nprint(\"Test Accuracy:\", round(accuracy * 100, 2), \"%\")\r\n\r\n# Enter New Patient Data\r\nnew_patient = np.array([\r\n    [150, 34.0, 55]\r\n])\r\n\r\nprint(\"\\n===== NEW PATIENT =====\")\r\nprint(\"Glucose Level : 150\")\r\nprint(\"BMI           : 34.0\")\r\nprint(\"Age           : 55\")\r\n\r\nnew_patient_scaled = scaler.transform(new_patient)\r\n\r\n# Predict\r\nprediction = model.predict(\r\n    new_patient_scaled,\r\n    verbose=0\r\n)\r\n\r\nprobability = prediction[0][0]\r\n\r\nprint(\"\\n===== PREDICTION =====\")\r\nprint(\"Model Output:\", round(float(probability), 4))\r\n\r\nif probability >= 0.5:\r\n    print(\"Diabetes Risk: High Risk\")\r\nelse:\r\n    print(\"Diabetes Risk: Low Risk\")"
      }
    ]
  },
  {
    "id": "python-10",
    "subject": "python",
    "number": 10,
    "title": "Convolutional Neural Network (CNN) - MNIST Digits",
    "category": "Deep Learning / Computer Vision",
    "command": "python prgm10.py",
    "summary": "Constructs CNN with Conv2D, MaxPooling2D, and Dense layers to classify handwritten digits (0-9) from MNIST dataset.",
    "executionGuide": "1. Requires: pip install tensorflow matplotlib numpy.\n2. Run: python prgm10.py\n3. Loads MNIST, normalizes pixel data, trains CNN for 2 epochs, evaluates accuracy, and plots random test digit prediction.",
    "files": [
      {
        "name": "prgm10.py",
        "language": "python",
        "content": "# Convolutional Neural Network using TensorFlow\r\n# Handwritten Digit Classification using MNIST Dataset\r\n\r\nimport tensorflow as tf\r\nimport numpy as np\r\nimport matplotlib.pyplot as plt\r\nimport random\r\n\r\n# Load MNIST Dataset\r\n(X_train, y_train), (X_test, y_test) = \\\r\n    tf.keras.datasets.mnist.load_data()\r\n\r\n# Display Dataset Summary\r\nprint(\"===== MNIST DATASET SUMMARY =====\")\r\nprint(\"Total Training Images :\", len(X_train))\r\nprint(\"Total Testing Images  :\", len(X_test))\r\nprint(\"Image Size            :\", X_train.shape[1], \"x\", X_train.shape[2])\r\nprint(\"Number of Classes     : 10\")\r\nprint(\"Classes               : 0 to 9\")\r\n\r\n# Display Sample Images\r\nplt.figure(figsize=(8, 4))\r\n\r\nfor i in range(10):\r\n    plt.subplot(2, 5, i + 1)\r\n    plt.imshow(X_train[i], cmap=\"gray\")\r\n    plt.title(\"Digit: \" + str(y_train[i]))\r\n    plt.axis(\"off\")\r\n\r\nplt.suptitle(\"Sample MNIST Handwritten Digits\")\r\nplt.tight_layout()\r\nplt.show()\r\n\r\n# Use Smaller Dataset for Faster Execution\r\nX_train = X_train[:2000]\r\ny_train = y_train[:2000]\r\n\r\nX_test = X_test[:500]\r\ny_test = y_test[:500]\r\n\r\nprint(\"\\n===== DATA USED =====\")\r\nprint(\"Training Images :\", len(X_train))\r\nprint(\"Testing Images  :\", len(X_test))\r\n\r\n# Normalize Images\r\nX_train = X_train / 255.0\r\nX_test = X_test / 255.0\r\n\r\n# Add Channel Dimension\r\nX_train = X_train.reshape(-1, 28, 28, 1)\r\nX_test = X_test.reshape(-1, 28, 28, 1)\r\n\r\n# Create CNN Model\r\nmodel = tf.keras.Sequential([\r\n\r\n    tf.keras.layers.Input(shape=(28, 28, 1)),\r\n\r\n    tf.keras.layers.Conv2D(\r\n        16,\r\n        (3, 3),\r\n        activation=\"relu\"\r\n    ),\r\n\r\n    tf.keras.layers.MaxPooling2D(\r\n        (2, 2)\r\n    ),\r\n\r\n    tf.keras.layers.Flatten(),\r\n\r\n    tf.keras.layers.Dense(\r\n        32,\r\n        activation=\"relu\"\r\n    ),\r\n\r\n    tf.keras.layers.Dense(\r\n        10,\r\n        activation=\"softmax\"\r\n    )\r\n])\r\n\r\n# Compile Model\r\nmodel.compile(\r\n    optimizer=\"adam\",\r\n    loss=\"sparse_categorical_crossentropy\",\r\n    metrics=[\"accuracy\"]\r\n)\r\n\r\n# Train Model\r\nprint(\"\\n===== MODEL TRAINING =====\")\r\n\r\nmodel.fit(\r\n    X_train,\r\n    y_train,\r\n    epochs=2,\r\n    batch_size=64\r\n)\r\n\r\n# Evaluate Model\r\nloss, accuracy = model.evaluate(\r\n    X_test,\r\n    y_test,\r\n    verbose=0\r\n)\r\n\r\nprint(\"\\n===== MODEL PERFORMANCE =====\")\r\nprint(\r\n    \"Test Accuracy:\",\r\n    round(accuracy * 100, 2),\r\n    \"%\"\r\n)\r\n\r\n# Select a Random Test Image\r\nindex = random.randint(\r\n    0,\r\n    len(X_test) - 1\r\n)\r\n\r\n# Predict the Random Image\r\nprediction = model.predict(\r\n    X_test[index:index + 1],\r\n    verbose=0\r\n)\r\n\r\npredicted_digit = np.argmax(\r\n    prediction[0]\r\n)\r\n\r\nactual_digit = y_test[index]\r\n\r\n# Display Prediction\r\nprint(\"\\n===== DIGIT PREDICTION =====\")\r\nprint(\"Test Image No. :\", index)\r\nprint(\"Actual Digit   :\", actual_digit)\r\nprint(\"Predicted Digit:\", predicted_digit)\r\n\r\n# Display the Random Test Image\r\nplt.imshow(\r\n    X_test[index].reshape(28, 28),\r\n    cmap=\"gray\"\r\n)\r\n\r\nplt.title(\r\n    \"Actual: \" + str(actual_digit) +\r\n    \"\\nPredicted: \" + str(predicted_digit)\r\n)\r\n\r\nplt.axis(\"off\")\r\nplt.show()\r\n"
      }
    ]
  }
]
};
