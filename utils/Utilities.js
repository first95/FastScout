import qr from "../assets/easy.qrcode.min";

function qr_regenerate() {
    // Get data
    let data = getData()

    // Regenerate QR Code
    qr.makeCode(data)

    return true
}
