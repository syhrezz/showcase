const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexFile, 'utf8');

// Regex to remove the /* Navbar */ ... #mob-menu.open { ... } block
const regex = /\/\* Navbar \*\/(.*?)\/\* Hero \*\//s;
if (regex.test(content)) {
    content = content.replace(regex, '/* Hero */');
    fs.writeFileSync(indexFile, content, 'utf8');
    console.log("Removed inline navbar styles from index.html");
} else {
    console.log("Could not find inline navbar styles to remove");
}
