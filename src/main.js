const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().size;
  mainWindow = new BrowserWindow({
    frame: false,
    width,
    height,
    kiosk: true,
    resizable: false,
  });
  mainWindow.loadFile("src/index.html");
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", () => app.quit());
