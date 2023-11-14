// your-popup-ad-script.js
document.addEventListener("DOMContentLoaded", function() {
    // Gantilah dengan konten iklan popup yang sesuai dengan kebutuhan Anda
    var adContent = '<div id="popupAd" style="display: none; position: fixed; bottom: 0; left: 0; width: 100%; background-color: #fff; text-align: center; padding: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"><iframe src="//overlapflintsidenote.com/d3d5907df5a43dd10c223a284cc7835e/invoke.js" width="300" height="250" frameborder="0" scrolling="no"></iframe><span style="cursor: pointer; color: #333; font-size: 18px; font-weight: bold; position: absolute; top: 5px; right: 10px;" onclick="closePopup()">X</span></div>';

    // Sisipkan konten iklan popup ke dalam body
    $("body").append(adContent);

    // Tampilkan popup setelah beberapa detik (contoh: 5000 milidetik atau 5 detik)
    setTimeout(function() {
        $("#popupAd").fadeIn();
    }, 5000);
});

function closePopup() {
    // Gantilah dengan URL iklan langsung
    window.location.href = "https://overlapflintsidenote.com/g97kvzcc?key=3992c023760d522fd545fdaf2485b3aa";
}
