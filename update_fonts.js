const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'kontak.html',
    'layanan.html',
    'portofolio.html',
    'produk-cbt.html',
    'produk-ecommerce.html',
    'produk-fnb.html',
    'produk-hr.html',
    'produk-pos.html',
    'produk.html',
    'tentang-kami.html'
];

const fontLinks = `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Remove existing google fonts links
    content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"[^>]*>\s*/g, '');
    content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*/g, '');
    content = content.replace(/<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2[^>]*>\s*/g, '');

    // Insert new fonts links right before font-awesome
    content = content.replace(
        /<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome/g,
        fontLinks + '\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated fonts in " + file);
});
