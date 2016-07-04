'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = require('electron');

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow();
    mainWindow.maximize();
    mainWindow.loadURL(`file://${__dirname}/views/main.html`);

    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    ipcMain.on('save', function(event, arg) {
        console.log(arg);
    });

    ipcMain.on('openDevTools', function(event, arg) {
        mainWindow.webContents.openDevTools();
    })
});