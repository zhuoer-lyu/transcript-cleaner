# Zoom Cloud Transcript Cleaner

This Google Apps Script simplifies processing raw transcripts generated from Zoom's cloud recordings. It offers two functions: **Anonymize speakers** and **Combine chunks**.

- **Anonymize speakers:** Replaces speaker names with anonymous labels, similar to the find and replace function.
- **Combine chunks:** Merges fragmented text chunks from the same speaker into a continuous paragraph, preserving only the first timestamp.

## How to Use

1. **Prepare your transcript:**
   - Ensure your raw transcript is from a Zoom cloud recording (see *example_transcript.vtt* in this repository for reference).
   - Copy and paste your raw transcript into a new Google Doc.

2. **Set up the script:**
   - In the Google Doc, navigate to **Extensions** > **Apps Script**.
   - Delete the default code in the script editor.
   - Open *transcript_cleaner.js* in this repository, copy its contents, and paste them into the *Code.gs* file in the script editor.
   - Save the project.

3. **Clean the transcript:**
   - Return to your Google Doc and refresh. A new button labeled **Clean Transcript** should appear in the navigation bar (this may take a moment to load).
   - **Anonymize speakers:** Click **Clean Transcript** > **Anonymize speakers** and follow the prompts to anonymize speaker names. If this is your first time using Google Apps Script, you’ll need to authorize the script.
   - **Combine chunks:** Click **Clean Transcript** > **Combine chunks** to merge fragmented text chunks from the same speaker. For long transcripts, the script might take some time to run. Wait for the pop-up message "Finished script".

## Important Notes

1. This script is designed specifically for Zoom cloud transcripts, which distinguish between speakers. The **Combine chunks** function relies on this feature.
2. The script does not correct speaker misidentification or clean up utterances, which can occur in raw transcripts. A final review is recommended to ensure the accuracy of your transcript.
