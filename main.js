const { app, BrowserWindow } = require('electron')

// Load index.html into a new BrowserWindows instance
function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600
    })

    window.loadFile('index.html')
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