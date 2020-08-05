//ON a Mac download this complete repository and pass the following command in the terminal
// npm run create-installer-mac


const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
let mainWindow;
let addWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 573, height:613, icon: __dirname + '/img/logo.png'});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol:'file:',
        shashes: true
    }));

    //Quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    })

    // Build menu form Template
    const mainMenue = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenue);
});

// Handle Creat Add Window
function createAddWindow() {
    addWindow = new BrowserWindow({width: 374, height:610, title: 'sauravdutt.tech'});

    addWindow.loadURL(url.format({
        pathname: path.join('https://www.sauravdutt.tech/'),
        shashes: true
    }));
    addWindow.setMenuBarVisibility(false);
    // Garbage Collection
    addWindow.on('close', function() {
        addWindow=null;
    })
}

//Create Menue Template

const mainMenuTemplate = [
    {
        label:'Objectives',
        submenu:[
            {
                role: 'reload'
            },
            {
                label: 'FeedBack',
                accelerator: process.platform =='darwin' ? 'Command+S' : 'Ctrl+S',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform =='darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

// If mac, add empty object to menu

if(process.platform =='darwin'){
    mainMenuTemplate.unshift({});
}

