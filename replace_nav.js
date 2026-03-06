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

const template = `    <nav id="nav">
        <div class="nav-inner">
            <a href="/" class="logo-text">Biz<span>Mate</span></a>
            <div class="nav-links hidden lg:flex items-center gap-1">
                <a href="/" class="{{HOME_CLASS}}">Beranda</a>
                <a href="/tentang-kami" class="{{TENTANG_CLASS}}">Tentang Kami</a>
                <div class="dd-wrap">
                    <a href="#" class="flex items-center gap-1 {{PRODUK_CLASS}}">Produk <i class="fas fa-chevron-down text-[9px]"></i></a>
                    <div class="dd-menu">
                        <a href="/produk" class="dd-item">
                            <div class="dd-icon" style="background:#eef2ff"><i class="fas fa-th-large text-indigo-500 text-xs"></i></div>
                            <div>
                                <div class="font-semibold text-xs text-gray-800">Semua Produk</div>
                                <div class="text-xs text-gray-400">Lihat seluruh solusi kami</div>
                            </div>
                        </a>
                        <hr class="my-1 border-gray-100">
                        <a href="/produk-hr" class="dd-item">
                            <div class="dd-icon" style="background:#eff6ff"><i class="fas fa-users text-blue-500 text-xs"></i></div><span>BizMateHR — HR Management</span>
                        </a>
                        <a href="/produk-fnb" class="dd-item">
                            <div class="dd-icon" style="background:#fff7ed"><i class="fas fa-utensils text-orange-500 text-xs"></i></div><span>BizMateResto — FnB</span>
                        </a>
                        <a href="/produk-ecommerce" class="dd-item">
                            <div class="dd-icon" style="background:#f0fdf4"><i class="fas fa-shopping-bag text-green-500 text-xs"></i></div><span>BizMateStore — eCommerce</span>
                        </a>
                        <a href="/produk-cbt" class="dd-item">
                            <div class="dd-icon" style="background:#faf5ff"><i class="fas fa-laptop-code text-purple-500 text-xs"></i></div><span>BizMateExam — CBT</span>
                        </a>
                        <a href="/produk-pos" class="dd-item">
                            <div class="dd-icon" style="background:#fff1f2"><i class="fas fa-cash-register text-rose-500 text-xs"></i></div><span>BizMatePOS — Point of Sale</span>
                        </a>
                    </div>
                </div>
                <a href="/layanan" class="{{LAYANAN_CLASS}}">Layanan</a>
                <a href="/portofolio" class="{{PORTOFOLIO_CLASS}}">Portofolio</a>
                <a href="/kontak" class="{{KONTAK_CLASS}}">Kontak</a>
            </div>
            <div class="flex items-center gap-3">
                <a href="https://wa.me/6281234567890?text=Halo%20BizMate" target="_blank" class="btn-cta hidden lg:inline-flex items-center gap-2"><i class="fab fa-whatsapp"></i> Hubungi Kami</a>
                <button id="mob-btn" class="lg:hidden p-2 rounded-lg hover:bg-gray-100" onclick="document.getElementById('mob-menu').classList.toggle('open')"><i class="fas fa-bars text-gray-600"></i></button>
            </div>
        </div>
        <div id="mob-menu">
            <div class="px-4 py-3 space-y-1 max-w-7xl mx-auto">
                <a href="/" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_HOME_CLASS}}">Beranda</a>
                <a href="/tentang-kami" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_TENTANG_CLASS}}">Tentang Kami</a>
                <a href="/produk" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_PRODUK_CLASS}}">Semua Produk</a>
                <a href="/layanan" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_LAYANAN_CLASS}}">Layanan</a>
                <a href="/portofolio" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_PORTOFOLIO_CLASS}}">Portofolio</a>
                <a href="/kontak" class="block px-4 py-2.5 rounded-xl text-sm font-medium {{MOB_KONTAK_CLASS}}">Kontak</a>
                <a href="https://wa.me/6281234567890" target="_blank" class="btn-cta flex items-center justify-center gap-2 mt-2 text-center"><i class="fab fa-whatsapp"></i> Hubungi via WhatsApp</a>
            </div>
        </div>
    </nav>`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        console.log("File not found: " + file);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    const map = {
        'index.html': 'HOME',
        'kontak.html': 'KONTAK',
        'layanan.html': 'LAYANAN',
        'portofolio.html': 'PORTOFOLIO',
        'produk.html': 'PRODUK',
        'produk-cbt.html': 'PRODUK',
        'produk-ecommerce.html': 'PRODUK',
        'produk-fnb.html': 'PRODUK',
        'produk-hr.html': 'PRODUK',
        'produk-pos.html': 'PRODUK',
        'tentang-kami.html': 'TENTANG'
    };

    const activeKey = map[file];

    let navReplaced = template;
    const keys = ['HOME', 'TENTANG', 'PRODUK', 'LAYANAN', 'PORTOFOLIO', 'KONTAK'];
    keys.forEach(k => {
        if (k === activeKey) {
            navReplaced = navReplaced.replace("{{" + k + "_CLASS}}", 'active');
            navReplaced = navReplaced.replace("{{MOB_" + k + "_CLASS}}", 'text-indigo-600 bg-indigo-50');
        } else {
            navReplaced = navReplaced.replace("{{" + k + "_CLASS}}", '');
            navReplaced = navReplaced.replace("{{MOB_" + k + "_CLASS}}", 'text-gray-600 hover:bg-gray-50');
        }
    });

    navReplaced = navReplaced.replace(/class=" "/g, 'class=""');
    navReplaced = navReplaced.replace(/class="([^"]*?) \+"/g, 'class="$1"');

    const regex = /<nav\b[^>]*>.*?<\/nav>/s;
    if (regex.test(content)) {
        content = content.replace(regex, navReplaced);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated " + file);
    } else {
        console.log("No <nav> found in " + file);
    }
});
