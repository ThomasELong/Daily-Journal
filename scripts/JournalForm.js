import { saveJournalEntries } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

saveJournalEntries().then(dispatchStateChangeEvent())


export const createEntry = ( entryObject ) => {
    return `
    <h1 class="myTitle">Daily Journal</h1>
    <form action="" class="journalEntries">
        <fieldset class="formEntry dateEntry">
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="formEntry">
            <label for="conceptsCovered">Concepts Covered:</label>
            <textarea name="conceptsCovered" id="conceptsCovered" cols="30" rows="2"></textarea>
        </fieldset>
        <fieldset class="formEntry">
            <label for="journalEntry">Journal Entry:</label>
            <textarea class="entryBox" type="text" name="journalEntry" id="journalEntry"></textarea>
        </fieldset>  
        <fieldset class="formEntry">
            <label for="currentFeeling">Mood for the Day:</label>
            <select name="currentFeeling" id="currentFeeling">
                <option value="none">     </option>
                <option value="excited">Excited</option>
                <option value="enthusiastic">Enthusiastic</option>
                <option value="happy">Happy</option>
                <option value="determined">Determined</option>
                <option value="anxious">Anxious</option>
                <option value="disappointed">Disappointed</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="frustrated">frustrated</option>
            </select>
        </fieldset>
        <div class="journalEntry__button"></div>
        <div class="submittedNotesContainer"></div>
    </form>

    // <div class="entryItem">
    //     <p>Date:${new Date(entryObject.timestamp).toLocaleDateString()}</p>
    //     <p>Mood: ${entryObject.mood}</p>
    //     <p>Concept: ${entryObject.concept}</p>
    //     <p>Entry: ${entryObject.entry}</p>
    // </div>
    `

    }