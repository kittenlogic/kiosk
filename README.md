# kiosk

## How to setup a local server

1. Copy the Kiosk folder into `C:\Program Files (x86)`
2. Open the "alt index pages" folder and copy the corresponding "index.html" page into the "public" folder.
3. Make sure the alt index file replaces the existing "index.html" page.
4. If setting up a new kiosk, go back to the Kiosk folder and install python-3.12.3-amd64.exe
5. Type "Command Prompt" into the Windows search bar.
6. Type `cd\program files (x86)\kiosk\public`
7. Type `python3 -m http.server`
8. Click Allow Access if a security popup appears.
9. Lauch Microsoft Edge and type `localhost:8000` into the browser
10. Once the page loads, click on the "..." at the top right of the browser and click on the Fullscreen icon. Note: F11 is the only way to exit full screen mode, so you will need to plug in a keyboard if you want to exit.
11. If the video on the menu screen doesn't automatically play, click on one of the menu options and then on the Aeon logo at the top left of the screen to go back to the menu. It should play on repeat.
12. If you end up replacing the index file after the site has already loaded once, you will need to clear the cache.
13. If so, type `edge://settings/clearbrowserdata` in the browser and clear the cache, then refresh the page.

