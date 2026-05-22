document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    /* =========================
       SCROLL REVEAL ANIMATION
       خفيف وسريع باستخدام IntersectionObserver
    ========================== */

    const revealItems = document.querySelectorAll(`
        .hero-content,
        .path-card,
        .main-gallery-card,
        .mini-card,
        .section-header,
        .gallery-main-title,
        .f-col
    `);

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item) => {
        item.classList.add('reveal-element');
        revealObserver.observe(item);
    });

    /* =========================
       PARALLAX HERO
       ناعم وخفيف جداً
    ========================== */

    const hero = document.querySelector('.hero-section');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (hero && scrollY < 700) {
            hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
        }
    });

    /* =========================
       BUTTON MAGNET EFFECT
       بدون لاج
    ========================== */

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {

        btn.addEventListener('mousemove', (e) => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `
                translate(${x * 0.12}px, ${y * 0.12}px)
            `;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px,0px)';
        });

    });

    /* =========================
       CARDS HOVER 3D EFFECT
    ========================== */

    const cards = document.querySelectorAll(`
        .path-card,
        .main-gallery-card,
        .mini-card
    `);

    cards.forEach((card) => {

        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
            `;
        });

    });

    /* =========================
       SEARCH OVERLAY
    ========================== */

    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    if (searchBtn && searchOverlay && closeSearch) {

        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

    }

    /* =========================
       CART DRAWER
    ========================== */

    const cartBtn = document.querySelector('.cart-btn');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');

    if (cartBtn && cartOverlay && closeCart) {

        cartBtn.addEventListener('click', () => {
            cartOverlay.classList.add('active');
        });

        closeCart.addEventListener('click', () => {
            cartOverlay.classList.remove('active');
        });

    }

    /* =========================
       PROFILE PANEL
    ========================== */

    const profileBtn = document.querySelectorAll('.icon-btn')[2];
    const profilePanel = document.querySelector('.profile-panel');

    if (profileBtn && profilePanel) {

        profileBtn.addEventListener('click', () => {
            profilePanel.classList.toggle('active');
        });

    }

    /* =========================
       FLOATING ANIMATION
    ========================== */

    const floatingCard = document.querySelector('.main-gallery-card');

    if (floatingCard) {

        let floatY = 0;
        let direction = 1;

        setInterval(() => {

            floatY += direction * 0.4;

            if (floatY > 8 || floatY < -8) {
                direction *= -1;
            }

            floatingCard.style.translate = `0 ${floatY}px`;

        }, 30);
    }

});
document.addEventListener("DOMContentLoaded", () => {
// 1. كود تشغيل تفعيل وإغلاق قائمة الموبايل (Menu Toggle)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {  
    menuToggle.addEventListener('click', () => {  
        // تبديل الكلاسات لتشغيل حركات الـ CSS  
        menuToggle.classList.toggle('active');  
        navLinks.classList.toggle('open');  
    });  
}  
  
// 2. كود أنيميشن صفحة الرينت (Rent Page Animations)  
const fadeElements = document.querySelectorAll('.fade-up');  
fadeElements.forEach((element, index) => {  
    setTimeout(() => {  
        element.classList.add('is-visible');  
    }, index * 120);  
});  
  
setTimeout(() => {  
    document.querySelector('.anim-layer-bg')?.classList.add('is-visible');  
    document.querySelector('.anim-card-main')?.classList.add('is-visible');  
}, 250);

});
// أنيميشن خفيف جداً وسريع للظهور عند السكرول بدون التضحية بالأداء
const registryObserver = () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
observer.unobserve(entry.target); // إيقاف المراقبة فور الظهور لضمان سرعة معالجة خرافية
}
});
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

};

// تشغيل الدالة فور تحميل الـ DOM
document.addEventListener("DOMContentLoaded", () => {
registryObserver();
});
// تفعيل بوكس نجاح عملية الدفع عند الضغط على PAY NOW
document.addEventListener("DOMContentLoaded", () => {
const payForm = document.querySelector(".checkout-form");
const successModal = document.getElementById("successModal");
const payBtn = document.querySelector(".btn-pay-now");

if (payForm && successModal && payBtn) {  
    payForm.addEventListener("submit", (e) => {  
        e.preventDefault(); // منع الصفحة من تحديث نفسها  

        // تغيير حالة الزر ليعطي إيحاء بالتحميل والـ Processing  
        payBtn.innerText = "PROCESSING...";  
        payBtn.style.opacity = "0.7";  
        payBtn.style.pointerEvents = "none";  

        // إظهار المودال بعد ثانيتين تماماً كأن السيستم فحص البطاقة  
        setTimeout(() => {  
            successModal.classList.add("show");  
            payBtn.innerText = "PAY NOW";  
            payBtn.style.opacity = "1";  
            payBtn.style.pointerEvents = "auto";  
            payForm.reset(); // تفريغ الخانات بعد النجاح  
        }, 2000);  
    });  
}

});
document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    // فتح البحث
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
    });

    // إغلاق بزر X
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // إغلاق عند الضغط خارج الصندوق
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });

});
document.addEventListener("DOMContentLoaded", () => {

    const cartBtn = document.querySelector('.cart-btn');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');

    // فتح السلة
    cartBtn.addEventListener('click', () => {
        cartOverlay.classList.add('active');
    });

    // إغلاق السلة
    closeCart.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
    });

    // إغلاق عند الضغط برا
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
        }
    });

});
document.addEventListener("DOMContentLoaded", () => {

    const profileBtn = document.querySelector('.icon-btn[aria-label="Profile"]');
    const profilePanel = document.querySelector('.profile-panel');

    profileBtn.addEventListener('click', () => {
        profilePanel.classList.add('active');
    });

    profilePanel.addEventListener('click', (e) => {
        if(e.target === profilePanel){
            profilePanel.classList.remove('active');
        }
    });

});
const revealElements = document.querySelectorAll('.reveal-element');

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('revealed');
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

const cards = document.querySelectorAll('.catalog-card');

const cardsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{
    cardsObserver.observe(card);
});
