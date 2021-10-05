const { app } = require("electron");

const createWindow = require("./createWindow");
const createTray = require("./createTray");

app.whenReady().then(createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(createTray);
