# Apps Script Emails

We send various automated emails using [Google Apps Script](https://developers.google.com/apps-script/reference) and this folder contains code and email templates for them. The documentation for these in generally in Drive somewhere but below is a basic outline.

## Setup

Apps Scripts are contained within particular Drive documents, like forms and spreadsheets. We can define a trigger on them to execute a function within the script when an event occurs, such as a form submission. By convention, we name our event handler functions like `onTrigger`, e.g. `onSubmit`.

Apps Scripts can manipulate objects in many different Google applications. Each one of these requires particular permissions to operate, so a script that creates a document and sends an email might need permissions from Drive and Gmail. The first time we run a script, it should prompt for permissions. We may want to write a no-op function in our scripts that simply calls a method on every required App class then run that function to make sure the permissions request happens. We can also view errors in the execution log and those contain a link to the permissions prompt.

Testing directly within a script isn't easy but submitting a test form works OK. We may want to write scripts with testing parameters embedded in them so we can test from the Apps Script editor.
