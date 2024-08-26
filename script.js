document.addEventListener("DOMContentLoaded", function() {
    const uploadButton = document.getElementById('uploadButton');
    const uploadInput = document.getElementById('uploadInput');
    const gallery = document.getElementById('gallery');
    const imageTemplate = document.getElementById('imageTemplate');

    // فتح نافذة تحميل الصور عند الضغط على الزر
    uploadButton.addEventListener('click', () => {
        uploadInput.click();
    });

    // معالجة تحميل الصور
    uploadInput.addEventListener('change', function(event) {
        const files = event.target.files;
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const clone = imageTemplate.content.cloneNode(true);
                clone.querySelector('img').src = e.target.result;
                gallery.appendChild(clone);
            };
            reader.readAsDataURL(file);
        });
    });

    // إضافة خاصية التقييم بالنجوم
    gallery.addEventListener('click', function(event) {
        if(event.target.classList.contains('star')) {
            const stars = event.target.parentElement.querySelectorAll('.star');
            stars.forEach(star => star.classList.remove('selected'));
            event.target.classList.add('selected');
            let value = event.target.getAttribute('data-value');
            console.log(`تم تقييم الصورة بـ ${value} نجمة`);
        }
    });
});
