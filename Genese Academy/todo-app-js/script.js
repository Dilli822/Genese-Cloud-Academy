

// textarea where user can write the notes
// user can save the notes by adding

// this is key for localstorage
let MY_NOTE = '_my_note';

// now let's make array for saving the multiple notes

let my_notes =  [];

// we need to show the previous typed data with 
// .onload will load the js script
// after loading the html by browser
window.onload = function(){
    // we call the previous saved notes
    onGetSavedNotes();
};

function onAddNote(){
    // we have to extract the elements from DOM
    // we get single elementfrom element Id
    let myNote = document.getElementById("note").value;
    // printing the whole textarea element here
    // .value will give value of elements 

    // user can see and we can pass the note saved date value
    let note = {};
    note.value = myNote;
    note.date = new Date();


    // console.log(myNote)

    // After capturing the element's value now
    // we have to store it somewhere but where?
    // okay we have two kinds of storage inside the browser
    // local and session storage we can store in there

    // Session storage will clear it's storage after closing browser
    // but in local storage it needs to be cleared manually or programtically

    // pushing the value inside the myNote
    // my_notes.push(myNote);
    // lets push the note
    my_notes.push(note)
    console.log(my_notes)

    // it will show [object object] as large data comes in array and array doesnot understand it
    // so we have to make it simpler and make it string using stringify
    // we use JSON.strignfy method in case of large and complex data 
    // which will be not be understood by browser so we make them strings from json data type
    // array is understood but inside it data is not understood by browser so we make whole array as string format
    // so browser can understand it return as object
    console.log(JSON.stringify(my_notes))

    // in localstorage data are stored key value pairs 
    // localStorage.setItem(MY_NOTE, note)
    // localStorage.setItem(MY_NOTE, my_notes);
    localStorage.setItem(MY_NOTE, JSON.stringify(my_notes));

    // then we can check the save valued pair in localstorage
    // suppose I wrote the hello world we are here in textarea and saved it with btn
    // then it will be saved as keyvalue pair inside the localstorage
    // which will be saved as _my_note  hello world we are here

    // call the onGetSavedNotes() .. see the console
    onGetSavedNotes();
}

// okay our localstorage has done saving the elements value
// now let's make the function to capture the localstorage data MY_NOTE = _my_note

function onGetSavedNotes(){

    // let's capture the localstorage key in variable
    let notes = localStorage.getItem(MY_NOTE);
    // inserting the captured value inside the #myNotes div
    document.getElementById('myNotes').innerText = notes;
    console.log(notes)

}

// localstorage is url depended like for abc url it is different and for ghc url it is different