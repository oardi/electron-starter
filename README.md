# Electron Basic Setup

## Requirements:
* Electron
* Code Editor


## Developement:

### Install Electron 
<pre>
npm install electron --save-dev
</pre>

### Starting app
<pre>
npm start
</pre>


## Building

### Installing packager
<pre>
npm install electron-packager --save-dev
</pre>

### Build Beispiel
electron-packager ./ App-Name --platform=win32 --arch=ia32
[API docu](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#platform)