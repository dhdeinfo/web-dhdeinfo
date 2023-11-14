// your-popup-ad-script.js
document.addEventListener("DOMContentLoaded", function() {
    // Gantilah dengan konten iklan yang sesuai dengan kebutuhan Anda
    var adContent = '<script type="text/javascript">atOptions = { "key": "d3d5907df5a43dd10c223a284cc7835e", "format": "iframe", "height": 250, "width": 300, "params": {} }; document.write(\'<scr\' + \'ipt type="text/javascript" src="//overlapflintsidenote.com/d3d5907df5a43dd10c223a284cc7835e/invoke.js"></scr\' + \'ipt>\');</script>';

    // Sisipkan konten iklan ke dalam elemen overlay
    createPopupAd(adContent);
});

function createPopupAd(content) {
    var overlay = document.createElement("div");
    overlay.id = "adOverlay";

    var adContainer = document.createElement("div");
    adContainer.id = "popupAdContainer";
    adContainer.innerHTML = content;

    var closeBtn = document.createElement("span");
    closeBtn.id = "closeBtn";
    closeBtn.innerHTML = "&times;"; // Tanda silang untuk menutup popup

    // Menutup popup dan menjalankan iklan ketika tombol ditutup
    closeBtn.addEventListener("click", function() {
        document.body.removeChild(overlay);
        // Menjalankan iklan direct link
        window.open("https://overlapflintsidenote.com/g97kvzcc?key=3992c023760d522fd545fdaf2485b3aa", "_blank");
    });

    overlay.appendChild(adContainer);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
}
