var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
function createWindow() {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    var winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3456' : "file://" + __dirname + "/dist/index.html";
    // win.loadFile('dist/index.html');
    win.loadURL(winURL);
}
app.whenReady()
    .then(function () {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
