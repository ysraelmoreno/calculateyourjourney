const { Tray, Menu, app } = require("electron");

function openTardis() {
  const proxy = window.open("https://tardis.madeiramadeira.com.br/access");
}

const createTray = () => {
  const tray = new Tray("icon.png");

  const contextMenu = Menu.buildFromTemplate([
    { label: "Open Tardis", type: "normal", click: openTardis },
    { type: "separator" },
    { label: "Quit", type: "normal", click: app.quit },
  ]);

  tray.setContextMenu(contextMenu);
};

module.exports = createTray;
