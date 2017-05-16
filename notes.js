console.log("Starting notes.js");

const fs = require("fs");
const _ = require("lodash");

var fetchNotes = () =>{

    try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
    }catch(e){
    return [];
    }

};
var saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}
var addNote = function(title, body){
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    }; 
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });
    if (duplicateNotes.length === 0){
        console.log("Adding note", title, body);
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        console.log("Duplicate note found!");
    }
};

var getAll = function(){
    console.log("Getting all notes..");
    return fetchNotes();
}

var getNote = function(title){
    console.log(`Getting Note:  ${title}`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title === title);
    console.log(`Filtered Notes: ${filteredNotes[0].title}`);
    return filteredNotes[0];
}

var remNote = function(title){
    console.log(`Removing Note: ${title}!`);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>{
        note.title !== title
    });
    if(filteredNotes.length === notes.length){
        // console.log(`No note removed!`);
        return false;
    } else 
       { saveNotes(filteredNotes);
        return true;}
}

var logNote = (note)=>{
    // debugger;
    console.log(`Note: Title: ${note.title}, Body: ${note.body}`);
    }

module.exports = {addNote, getAll, getNote, remNote, logNote};