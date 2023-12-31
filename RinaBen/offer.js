document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        // Mã thực thi khi người dùng click vào ảnh
        console.log('Image clicked:', img.alt);
    });
});
