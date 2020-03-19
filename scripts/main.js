import { useJournalEntries, getJournalEntries, saveJournalEntries } from './JournalDataProvider.js';
import './JournalEntryList.js'
import "./JournalForm.js"
import { DisplayJournalEntryButton } from './JournalEntryButton.js';


useJournalEntries()

getJournalEntries().then(useJournalEntries)
saveJournalEntries()
DisplayJournalEntryButton()
