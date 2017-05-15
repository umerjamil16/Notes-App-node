console.log("Starting notes.js");

var addNote = function(title, body){
    console.log("Adding note", title, body);
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