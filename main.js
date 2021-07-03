const { app, BrowserWindow } = require('electron')
const path = require('path')

// Load index.html into a new BrowserWindows instance
function createWindow() {
    const window = new BrowserWindow({
        width: 1700,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // window.loadFile('index.html')
    window.loadURL('https://ajamal31.github.io/Weather-App-ReactJS/')
}

// Launch Window after the app module's ready event is fired
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0)
            createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})