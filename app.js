console.log("Starting app.js");

const fs = require("fs"); //req is used to load module
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];


if (command == "add"){
    notes.addNote(argv.title, argv.body);
} else if (command === "list"){
    notes.getAll();
}else if(command === "read"){
    notes.getNote(argv.title);
    // notes.getRead();
}else if (command === "remove"){
    notes.remNote(argv.title);
}
 else {
    console.log("Command not recognized.");
}