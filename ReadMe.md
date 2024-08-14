# DSLR printing interface

Small js project to fascilitate printing of images from a digital photobooth.

## Roadmap

#### MVP
 - Printing images on thermal paper ✅
 - Grabbing images automatically from a folder ✅
 - Printing the file name under image ✅
 - Generate QR code link to online gallery ❌
 
#### Stretch 

 - Resize any image into printable format ❌
 - Name images from this program using wordlist ❌
 - Upload images to online gallery from this program ❌
 - Extend to use different types of printers ❌
 - Send notification when printer is out of paper ❌

## Running 

Make sure node is installed, and run `npm install` from this dictionary. This will automatically download all the necessary node modules. 

Edit the path on line 34 of index.js to a local file path of the directory to watch. Make sure it is EMPTY on startup or the printer will try to print every single file in the folder. 

Make sure the printer is on and plugged in.

Then run `node index.js` in this directory. 