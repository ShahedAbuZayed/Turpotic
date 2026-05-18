
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