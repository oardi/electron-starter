const { app, BrowserWindow } = require("electron");

if (process.env.NODE_ENV === 'development')
	require('electron-reload')(__dirname);

let win = null;

app.on("ready", function () {

	win = new BrowserWindow({
		width: 1200,
		height: 720,
		webPreferences: {
			nodeIntegration: false,
		},
		// autoHideMenuBar: true
	});

	//load local index.html file
	win.loadURL('file://' + __dirname + '/src/index.html');

	//open dev tools with app start
	if (process.env.NODE_ENV === 'development')
		win.webContents.openDevTools();

	//clear win on closed
	win.on('closed', function () {
		win = null;
	});

});

//createWindow on activate
app.on('activate', function () {
	if (win == null) {
		createWindow();
	}
});

//quit the app from the process
app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit();
	}
});
