# What is this?
This is a growth model specifically made for [AINCLUSION](https://ainclusion.com). Last time this README was updated, this website was (and hopefully still is) hosted on https://ainclusion.smiley-face.no. 

# How to run?
## Installing prerequesites
### `npm` (version 20+), using `nvm`:
1. Download & install `nvm`
    - Linux: https://github.com/nvm-sh/nvm
    - Windows: https://github.com/coreybutler/nvm-windows/releases/latest
2. Once installed, open a new terminal / command prompt
3. Type `nvm install 20`
4. Type `nvm use 20`
5. Done, you have npm installed. If you ran into any errors, you're on your own, research it & solve it yourself

## Running the local web server
1. Clone this repository
    - With git: Open terminal -> `git clone https://github.com/SmileyFace799/ainclusion-business-model`
    - Manually:
        1. Click the big green "code"-button, then "Download zip"
        2. Extract the folder somewhere
2. Open a terminal / command prompt inside the cloned/extracted folder
    - Linux: You should know how to do this
    - Windows 10: Navigate inside the folder -> type "cmd" in file explorer's address bar
    - Windows 11: Nagivate inside the folder -> right click the empty background -> Open in command prompt (or something similar)
3. Type `npm install`
    - If this gives an error, something is wrong with the project's dependency tree, and that's my fault. If this happens, create a GitHub issue with this problem
4. Type `npm run dev`
5. Done, web server is not running. You can view the website by navigating to http://localhost:5173 in your browser