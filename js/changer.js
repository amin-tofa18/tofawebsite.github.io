document.addEventListener("DOMContentLoaded", function() {
    function changeFontStyles() {
        var fontSize = document.getElementById('fontSizeSlider').value;
        var fontWeight = document.getElementById('fontWeightSlider').value;

        // Mengubah font di seluruh situs web
        document.body.style.fontSize = fontSize + 'px';
        document.body.style.fontWeight = fontWeight;

        // Menyimpan nilai font di local storage
        localStorage.setItem('fontSize', fontSize);
        localStorage.setItem('fontWeight', fontWeight);
    }

    // Memeriksa apakah ada nilai ukuran font dan ketebalan font yang tersimpan di local storage
    var storedFontSize = localStorage.getItem('fontSize');
    var storedFontWeight = localStorage.getItem('fontWeight');

    // Mengatur ukuran font dan ketebalan font awal atau yang tersimpan
    var initialFontSize = storedFontSize ? storedFontSize : 18;
    var initialFontWeight = storedFontWeight ? storedFontWeight : 400;

    document.getElementById('fontSizeSlider').value = initialFontSize;
    document.getElementById('fontWeightSlider').value = initialFontWeight;

    // Menjalankan fungsi untuk mengubah font styles ketika halaman dimuat
    changeFontStyles();
    
    // Memastikan event handler diikat setelah DOM dimuat
    document.getElementById('fontSizeSlider').addEventListener('input', changeFontStyles);
    document.getElementById('fontWeightSlider').addEventListener('input', changeFontStyles);
});
