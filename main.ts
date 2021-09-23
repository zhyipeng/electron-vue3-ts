const {
  app,
  BrowserWindow,
} = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  const winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3456' : `file://${__dirname}/dist/index.html`;
  // win.loadFile('dist/index.html');
  win.loadURL(winURL);
}

app.whenReady()
  .then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
