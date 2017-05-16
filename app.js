console.log("Starting app.js");

const fs = require("fs"); //req is used to load module
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];


if (command == "add"){
    var note = notes.addNote(argv.title, argv.body);
    if(note !== undefined){
        console.log(`Note Saved. Title: ${argv.title}, Body: ${argv.body}`);
    }else{
        console.log(`Note not saved. Duplicate note found!`);
    }
} else if (command === "list"){
notes.getAll();
}else if(command === "read"){
    var status = notes.getNote(argv.title);
    if(status == undefined){
        console.log(`No note with title ${argv.title} found!`);
    }else {
        console.log(`Following note found:`);
        console.log(`Title: ${status.title}`);
        console.log(`Body: ${status.body}`);
    }
    // notes.getRead();
}else if (command === "remove"){
    var status = notes.remNote(argv.title);
    var message = status ? "Note was removed successfully": "Note does not exist"
    console.log(message)
}
 else {
    console.log("Command not recognized.");
}