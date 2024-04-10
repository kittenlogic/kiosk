# kiosk

## How to setup a local server

1. The 'public' folder contains the website for the kiosk. Move this folder into a directory on the kiosk computer that is *not* the Desktop.
2. Open the Terminal or Command Prompt in Windows.
3. Navigate to the directory that contains the 'public' folder, using the 'cd' command, followed by the full path to that folder, for example: `cd /Users/emily/code/kiosk/public`

4. To figure out the correct path to your folder, watch this video: [How to Open a File Path in Terminal - Windows](https://www.youtube.com/watch?v=my4kER-fyaY).

5. Next, check which version of Python is installed, enter the following command:

```
python -V
```

If the above fails, try:

```
python3 -V
```
6.  Enter the command to start up the server in that directory:

If Python version returned above is 3.X

```
python3 -m http.server
```

OR

```
py -3 -m http.server
```

If Python version returned above is 2.X

```
python -m SimpleHTTPServer
```
6. By default, this will run the contents of the directory on a local web server, on port 8000. You can go to this server by going to the URL `localhost:8000` in your web browser.
7. Congrats! Your website it running.

## Alternative index.html pages

1. You will find another folder titled `alt index pages`, which contains alternative versions of the index.html file. 
2. Each version only differs in the heading, which has the model number of the machine. They are titled, `index-mira5.html`, `index-mira7.html`, `index-mira9.html`, etc for easy identification.
3. As you install the website in the 6 different kiosks, make sure to replace the original `index.html` page with one of these. 
4. **IMPORTANT** make sure to rename the `index-mira5.html` (or whatever) to `index.html` when you add it to the root of the website folder for that particular kiosk. 
5. Repeat for each kiosk.