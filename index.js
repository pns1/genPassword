const { app, BrowserWindow } = require('electron')
let mainW;
app.on('ready',()=>{
  mainW = new BrowserWindow({
    width: 550,
    height: 350,
    resizable: false,
    autoHideMenuBar: true,
    icon: 'src/lock.png',
  })
  mainW.loadFile('main.html');
})