// Google Apps Script to take a form submission, create a PDF from it, and email the PDF as an attachment.
RESPONSE_FOLDER_ID = '1w9VE6-2pCpaWURKZtxvLYQGejDTNGmGd'
TPL_FILE_ID = '1MtS-kNbvSi4-4Q-g9SsQEQIdaZPgOPhReXtWxKhbDMI'
TESTING = false
FROM_EMAIL = "campusplanning@cca.edu"
REPLYTO_EMAIL = "campusplanning@cca.edu"

// convert UTC to Pacific time using Date::getTimezoneOffset()
let date = new Date()
date = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
// trim seconds and Z off of ISO string
date = date.toISOString().slice(0, -8).replace('T', ' ')

// escape regex special characters in form question text
function escape_regex_chars(text) {
    if (typeof text === 'string') return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    return text
}

function makePDF(values) {
    if (!values) {
        if (TESTING) {
            values = {
                "Email": "ephetteplace@cca.edu",
                "Files": "\n\t- https://docs.google.com/document/d/18kXAQFC-bjVILel5g6MGpcOQgmdJ_Jj53_UWyXJbW9k/edit",
                "Case for change: What are we trying to solve?": "Test case for change. Deceive eternal-return burying depths of love disgust zarathustra will good evil.",
                "Project Sponsor (Dean / VP)": "Friedrich Nietzsche, Dean of Humanities",
                "Functional Owner (Chair / Director): Please include name, title and relevance to project.": "Testy Testerson, Implementations Expert, Project Leader",
                "Key Stakeholders: Please include name, title and relevance to project.": "Test stakeholders. Horror depths derive zarathustra transvaluation zarathustra good insofar hatred selfish.",
                "What will be delivered? What are the services, functions, systems, solutions or tangible projects for which the sponsor and functional owner will take responsibility of delivery.": "Test deliverables. Spirit zarathustra ubermensch sexuality snare good derive superiority gains of justice justice christian. Right decrepit mountains ocean salvation merciful faith horror ocean zarathustra. Will morality christianity fearful holiest hope abstract decieve selfish free. Faith enlightenment decieve hatred ultimate deceptions dead value horror.\n\nAversion contradict grandeur spirit superiority decrepit ultimate merciful good spirit reason ocean. Merciful spirit.",
                "What is the ideal timeframe for this project and why?": "Test timeframe. One academic year.",
                "What spaces would be impacted? Please include building and room numbers or names, referencing campus maps if necessary. ": "Tet spaces. Morality inexpedient justice inexpedient decrepit god snare evil ocean law oneself derive. Oneself gains philosophy enlightenment pious faith faithful self good truth reason selfish ultimate faith.",
                "Financial resourcing? Provide a high level narrative overview of the estimated investment requirements, funding sources, the ongoing funding model if appropriate, and any impact to support staffing.": "Test finances. Aversion chaos law depths moral noble abstract. Snare moral ultimate revaluation against contradict.",
                "If there is more information not covered above that you would like to add, please do so here. ": "",
            }
        } else {
            return console.error('Error: no form response values passed to makePDF')
        }
    }
    const filename = `${date} ${values.Email || 'no email'}`
    const folder = DriveApp.getFolderById(RESPONSE_FOLDER_ID)
    // we could DriveApp.createFile(name, content, mimeType) directly without a template file
    const template = DriveApp.getFileById(TPL_FILE_ID)
    const newFile = template.makeCopy(filename, folder)
    const doc = DocumentApp.openById(newFile.getId())
    const body = doc.getBody()
    // console.log('template:', body.getText())
    const keys = Object.keys(values)
    keys.forEach(key => {
        // replaceText(pattern, replacement) uses regex but we want literal matches
        body.replaceText(`\{\{${escape_regex_chars(key)}\}\}`, values[key])
    })
    // console.log('document body:', body.getText())
    doc.saveAndClose()
    const pdf = newFile.getAs('application/pdf')
    folder.createFile(pdf)
    return pdf
}

function fileLinks(ids) {
    // form response for file upload question is an array of file ID strings
    // https://drive.google.com/open?id=ID links to files in Drive
    if (!ids) return ''
    const separator = `\n\t- `
    const prefix = (i) => `https://drive.google.com/open?id=${i}`
    return separator + ids.map(id => prefix(id)).join(separator)
}

function logEmailAliases() {
    // valid addresses you can use in the sendEmail(from) parameter
    Logger.log(GmailApp.getAliases())
}

function sendEmail(pdf, email) {
    const subject = 'Capital Project Request Form'
    const textBody = `Hello,

Thank you for submitting a Capital Project Request. Attached is a PDF of your submission.

The Campus Planning Committee (CPC), in partnership with the deans, reviews submissions at the beginning of each month, with a final review for the academic year at the beginning of February. CPC will follow up with the chair(s) and dean(s) of the requesting program(s).

Thank you,
Campus Planning Committee

• TT Takemoto, Interim Provost
• Mara Hancock, Chief Information Officer/Chief Operations Officer
• Ayana Richardson, Vice President, Academic Operations and Enrollment Management
• Annemarie Haar, Associate Vice President, Instructional Services
• Blair Baker, Senior Director of Operations

For more information, please visit: https://portal.cca.edu/campus-planning/committees/cpc/`
    const htmlBody = `<p>Hello,</p>
<p>Thank you for submitting a Capital Project Request. Attached is a PDF of your submission.</p>
<p>The Campus Planning Committee (CPC), in partnership with the deans, reviews submissions at the beginning of each month, with a final review for the academic year at the beginning of February. CPC will follow up with the chair(s) and dean(s) of the requesting program(s).</p>
<p>Thank you,</p>
<p>Campus Planning Committee</p>
<ul>
    <li>
        <a href="https://portal.cca.edu/people/ttakemoto/">TT Takemoto</a>, Interim Provost
    </li>
    <li>
        <a href="https://portal.cca.edu/people/mhancock/">Mara Hancock</a>, Chief Information Officer/Chief Operations Officer
    </li>
    <li>
        <a href="https://portal.cca.edu/people/ayana.richardson/">Ayana Richardson</a>, Vice President, Academic Operations and Enrollment Management
    </li>
    <li>
        <a href="https://portal.cca.edu/people/ahaar">Annemarie Haar</a>, Associate Vice President, Instructional Services
    </li>
    <li>
        <a href="https://portal.cca.edu/people/blairb/">Blair Baker</a>, Senior Director of Operations
    </li>
</ul>
<p>
    For more information, please visit: <a href="https://portal.cca.edu/campus-planning/committees/cpc/">https://portal.cca.edu/campus-planning/committees/cpc/</a>
</p>`
    // https://developers.google.com/apps-script/reference/gmail/gmail-app#sendemailrecipient,-subject,-body,-options
    GmailApp.sendEmail(email, subject, textBody, {
        attachments: [pdf],
        from: FROM_EMAIL,
        htmlBody: htmlBody,
        name: 'Capital Project Request Form',
        replyTo: REPLYTO_EMAIL
    })
}

function onSubmit(event) {
    const formResponse = event.response
    const itemResponses = formResponse.getItemResponses()
    let values = {}
    itemResponses.forEach(itemResponse => {
        const title = itemResponse.getItem().getTitle()
        values[title] = itemResponse.getResponse()
    })
    const email = formResponse.getRespondentEmail()
    values['Email'] = email
    values['Files'] = fileLinks(values['Please upload any associated drive documents relevant to the project.'])
    console.log(values)
    const pdf = makePDF(values)
    sendEmail(pdf, email)
}
