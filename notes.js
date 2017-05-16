console.log("Starting notes.js");

const fs = require("fs");

var addNote = function(title, body){
    var notes = [];
    var note = {
        title: title,
        body: body
    };

    try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
    }catch(e){
    console.log("Creating notes-data.json file...")
}

    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });
    if (duplicateNotes.length === 0){
        console.log("Adding note", title, body);
        notes.push(note);
        fs.writeFileSync("notes-data.json", JSON.stringify(notes));
    }else{
        console.log("Duplicate note found!");
    }
};

var getAll = function(){
    console.log("Getting all notes..");
}

var getNote = function(title){
    console.log(`Getting Note:  ${title}`);
}

var remNote = function(title){
    console.log(`Removing Note: ${title}`);
}

module.exports = {addNote, getAll, getNote, remNote};