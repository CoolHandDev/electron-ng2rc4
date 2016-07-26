'use strict';

const {electron, app, BrowserWindow, ipcMain} = require('electron');
//const app = electron.app;
//const BrowserWindow = electron.BrowserWindow;
//const {ipcMain} = require('electron');
const mongoClient = require('mongodb')
const url = 'mongodb://localhost:27017/mydatabase';

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

    //get location of cache.  need to clear it every now and then so changes are reflected.
    //console.log(app.getPath('userData'));

    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    ipcMain.on('save', function(event, arg) {
        console.log(arg);
        mongoClient.connect(url, function(err, db){
            //assert.equal(null, err);
            if (err){
                console.log('failed to connect to mongo');
            }
            else{
                console.log('connected to mongo');
                db.collection('projects').insertOne(arg, function(err, r) {
                    if (err) {
                        console.log('insert failed: ' + err);
                    } else {
                        console.log('insert was successful: ' + r);

                    }
                    db.close();
                });
            }
        });
    });

    ipcMain.on('openDevTools', function(event, arg) {
        if (mainWindow.isDevToolsOpened()) {
            mainWindow.webContents.closeDevTools();
        } else {
            mainWindow.webContents.openDevTools();
        }
    })

    ipcMain.on('connectToMongo', function(event, arg) {
        console.log('going to connect to mongo');
        mongoClient.connect(url, function(err, db){
            //assert.equal(null, err);
            if (err){
                console.log('failed to connect to mongo');
            }
            else{
                console.log('connected to mongo');
            }
            db.close();
        });
    })
});