export const createEntry = ( entryObject ) => {
    return `
    <div class="entryItem">
        <p>Date:${new Date(entryObject.timestamp).toLocaleDateString()}</p>
        <p>Mood: ${entryObject.mood}</p>
        <p>Concept: ${entryObject.concept}</p>
        <p>Entry: ${entryObject.entry}</p>
    </div>
    `

    }