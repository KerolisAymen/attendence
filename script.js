// Get video element for preview
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

// Listen for QR code scans
scanner.addListener('scan', function(content) {
    alert('Scanned: ' + content);
    // Here you can send the QR code content to your backend for processing
});

// Start camera feed
Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function(e) {
    console.error(e);
});
