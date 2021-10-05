const { BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.resolve(__dirname, "icon.png"),
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  return mainWindow;
};

module.exports = createWindow;
