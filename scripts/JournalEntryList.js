/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */


import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { createEntry } from "./Entry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".submittedNotesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalEntryButtonClicked", customEvent => {
    render()
})

const render = () => {
    getJournalEntries().then(() => {
        const allTheEntries = useJournalEntries()
            
        contentTarget.innerHTML = allTheEntries.map(
            currentEntry => {
                return createEntry(currentEntry)
            }
        ).join(" ")
    })
}









// import { getNotes, useNotes } from "./NoteDataProvider.js"
// import { Note } from "./Note.js"

// const contentTarget = document.querySelector(".notesContainer")
// const eventHub = document.querySelector(".container")

// let visibility = false

// eventHub.addEventListener("allNotesClicked", customEvent => {
//     render()
// })

// const render = () => {

//     getNotes().then(() => {
//         const allTheNotes = useNotes()

//         contentTarget.innerHTML = allTheNotes.map(
//             currentNoteObject => {
//                 return Note(currentNoteObject)
//             }
//         ).join(" ")
//     })
// }