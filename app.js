console.log("Starting app.js");

const fs = require("fs"); //req is used to load module
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const cmdObj = {
        title:{
            describe: "Title of note",
            demand: true,
            alias: "t"
        },
        body: {
            describe: "Body of the note",
            demand: true,
            alias: "b"
        }    
};

const argv = yargs
    .command("add", "Add a new note", {
        title:cmdObj.title,
        body: cmdObj.body
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title:cmdObj.title    
    })
    .command("remove", "Remove the particular note", {
         title:cmdObj.title
   })
    .help()
    .argv;
var command = argv._[0];


if (command == "add"){
    var note = notes.addNote(argv.title, argv.body);
    if(note !== undefined){
        notes.logNote(note);
    }else{
        console.log(`Note not saved. Duplicate note found!`);
    }
} else if (command === "list"){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note)=>{
        notes.logNote(note);
    });
}else if(command === "read"){
    console.log("reading a note..");
    var status = notes.getNote(argv.title);
    if(status == undefined){
        console.log(`No note with title ${argv.title} found!`);
    }else {
                notes.logNote(status);
    }
    // notes.getRead();
}else if (command === "remove"){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} 
 else {
    console.log("Command not recognized.");
}