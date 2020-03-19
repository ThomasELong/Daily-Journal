import { useJournalEntries, getJournalEntries, saveJournalEntries } from './JournalDataProvider.js';
import './JournalEntryList.js'
import "./Entry.js"
import { DisplayJournalEntryButton } from './JournalEntryButton.js';


useJournalEntries()

getJournalEntries().then(useJournalEntries)
saveJournalEntries()
DisplayJournalEntryButton()
