### Zoom Cloud Transcript Cleaner

This Google Apps Script helps you process raw transcripts generated from Zoom's cloud recordings. It has two functions: **Anonymize Speakers** and **Combine Chunks**. **Anonymize speakers** works exactly like normal find and replace functions. **Combine chunks** identify and combine fragmented chunks of texts of the same speaker.

### How to use it?

1. Have your raw transcript ready (note that it must be a Zoom cloud transcript to work, see example in *example_transcript.vtt* in this repository).
2. Copy and paste your raw transcript into a new Google Doc.
3. Click on **Extensions** - **Apps Script** in the Google Doc's navigation bar, and you should see a *Code.gs* file created with an *Untitled project* on the top. Delete the default codes in the codespace.
4. Open *transcript_cleaner.js* in this repository, copy and paste the codes into *Code.gs* and hit **Save project**.
5. Go back to your original Google Doc. You should a new button **Clean Transcript** pop up at the end of the navigation bar. It might take some time to load.
6. Click on **Clean Transcript** - **Anonymize Speakers** and enter texts as instructed by pop-ups to anonymize speakers. If this is the first time you use Google Apps Script, authorization is needed. 
7. Click on **Clean Transcript** - **Combine Chunks** to combined fragmented chunks of texts. If your transcript is long, the script might take some time to run. Wait until you see the pop-up message "Finished script".

### Miscellaneous
1. This script only works for Zoom cloud transcripts which differentiate speakers and reflect that in the raw transcripts. The script takes advantage of that to achieve the **Combine Chunks** function.
2. This script does not clean up utterances or incorrect identification of speakers, which is common in raw transcripts. Although the script handles most of the manual work, you still need to inspect the transcripts to give them a final touch.
