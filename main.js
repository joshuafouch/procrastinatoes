// This file is the main entry point for the Electron application.
const { app, BrowserWindow } = require('electron') // import app and browserwindow modules
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

// starts the app and creates a new browser window
app.whenReady().then(() => {
  createWindow()

  // for macOS
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// for macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})