lang = {
    'en': {
        ':heading': 'EN Language Selector',
        ':language': 'Englisch',
        ':languageISO': 'us',
    },

    'de': {
        ':heading': 'DE Language Selector',
        ':language': 'Deutsch',
        ':languageISO': 'de',
    }
};
// Hàm sao chép nội dung vào clipboard và hiển thị thông báo
function setClipboard(textToCopy) {
    // Tạo một thẻ textarea ẩn để sao chép
    var tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Chọn toàn bộ nội dung trong thẻ textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Đối với một số trình duyệt

    // Sao chép nội dung vào Clipboard
    document.execCommand("copy");

    // Loại bỏ thẻ textarea tạm thời
    document.body.removeChild(tempInput);

    // Hiển thị thông báo SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Đã sao chép thành công!',
        text: 'dstat.onlytris.name.vn/test.php',
        timer: 2000, // Tự động đóng thông báo sau 2 giây
        timerProgressBar: true,
    });
}

// Sử dụng hàm setClipboard
document.getElementById("copyButton").addEventListener("click", function() {
    var textToCopy = "Nội dung bạn muốn sao chép vào Clipboard";
    setClipboard(textToCopy);
});
