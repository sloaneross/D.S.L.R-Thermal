import { Printer, Image } from "@node-escpos/core";
// install escpos-usb adapter module manually
import USB from "@node-escpos/usb-adapter";
// Select the adapter based on your printer type
import { join, parse } from "path";
import * as chokidar from 'chokidar';

import FormData from "form-data";
import * as  fs from 'fs';
import * as http from 'http';

// This finds and opens the printer, sets the encoding
// const device = new USB();
// const options = { encoding: "utf8" /* default */ }
// let printer = new Printer(device, options);

function uploadImage(fullPath) {
    var form = new FormData();
    //form.append('my_field', 'file');
    form.append('file', fs.createReadStream(fullPath));

    form.submit("http://lesbianreflex.com/upload", function(err, res){
        console.log(res.statusCode);
        console.log(res.statusMessage);
        res.resume();
    })
}

// @param fullImagePath is the full (not relative) path to the *image file* to print
// @out prints the image along with the file name without path or extention
// function printImage(fullImagePath) {
//     var filename = parse(fullImagePath).name;
//     device.open(async function(err){
//         if(err){
//           //TODO handle error (try?)
//           return
//         }        
      
//         const filePath = join(fullImagePath);
//         const image = await Image.load(filePath);
//         await printer.image(image, "d24")
//         printer
//             .text(`${filename}`)
//             .feed(2)
//         printer.close()
//       });
// }

// wathces the selected folder, ignores dot files
const watcher = chokidar.watch("/Users/sloaneross/Desktop/PrintingFolder", {
    ignored: /(^|[\/\\])\../,
    persistant: true
})

// When files are added to the watched folder, logs the path and prints.
watcher
    .on('add', path => {
        console.log(`File ${path} has been added`)
        //printImage(path)
        uploadImage(path)
    }
    )
