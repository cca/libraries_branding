# 360 Link Branding

Since we do not use the 360 Link sidebar, these HTML snippets only appear when a user tries to access an article we do not have access to via our link resolver, e.g. by using the "Add results beyond your library's collection" option in Summon. Here is [an example page](https://ey7mr5fu9x.search.serialssolutions.com/?genre=article&id=pmid:123456).

To change:

- Login to Serials Solution Client Center at https://clientcenter.serialssolutions.com/CC/Login/Default.aspx
- Select _Administration Console_ underneath _360 Link_
- Select the _Link 2.0_ tab
- Select _Non-Sidebar Pages Branding Options_
- The _Edit_ button in the upper right allows you to make changes & [the _Preview_ button](https://knowledge.exlibrisgroup.com/360_Services/360_Link/0Product_Documentation/Configuring_360_Link_and_Setting_Up_Sources_and_Targets/Configuring_360_Link/360_Link%3A_Customization_and_Configuration/360_Link%3A_Administration_Console/Link_2.0_Tab_in_the_Administration_Console_(only_for_360_Link_with_Index-Enhanced_Direct_Linking)/360_Link%3A_Previewing_Changes_You_Make_in_360_Link_with_Index-Enhanced_Direct_Linking_(IEDL)) lets you see the effect immediately, but changes do not go live until the next business day

Under _Link 2.0_ > _Link Activation and Configuration_ > _Reference External JavaScript_ we used to inject a script hosted on the libraries' website but it provided little value. Still, if we see problems with the "results pages and custom links" (not 100% sure what the means) this setting is a way to hack around them.

## Custom Links

Under Link 2.0 > Custom Links we can define links that appear when our link resolver cannot find a resource in our holdings. This is most useful for linking to our interlibrary loan form so users can request the resource from another library, though we also use it to suggest searching Koha or Google Scholar. The links use placeholders to fill in metadata (see the **Meta-Tags** menu when adding a link for available options) and appear for only certain types of resources (Journal, Book, etc.).

Here are example link resolver "no result" pages for testing purposes:

- [_Indigeneity and sovereignty_](https://ey7mr5fu9x.search.serialssolutions.com/?ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=info%3Asid%2Fsummon.serialssolutions.com&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.genre=article&rft.atitle=Indigeneity+and+sovereignty%3A+the+work+of+two+early+twentieth-century+Native+American+art+critics&rft.jtitle=Third+text&rft.au=Hutchinson%2C+Elizabeth&rft.date=2000-09-01&rft.issn=0952-8822&rft.issue=52&rft.spage=21&rft.epage=29&rft_id=info:doi/10.1080%2F09528820008576863&rft.externalDBID=NO_FULL_TEXT&paramdict=en-us) (Article)
- [_Unsettled visions_](https://ey7mr5fu9x.search.serialssolutions.com/?ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=info%3Asid%2Fsummon.serialssolutions.com&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=book&rft.title=Unsettled+visions&rft.au=Machida%2C+Margo&rft.series=Objects%2Fhistories&rft.date=2008-01-01&rft.pub=Duke+University+Press&rft.isbn=0822391740&rft_id=info:doi/10.1515%2F9780822391746&rft.externalDBID=AUJGY&rft.externalDocID=74758&paramdict=en-us) (Book)
- [_An exploration of repetition as a factor in healing in art psychotherapy_](https://ey7mr5fu9x.search.serialssolutions.com/?ctx_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rfr_id=info%3Asid%2Fsummon.serialssolutions.com&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adissertation&rft.genre=dissertation&rft.title=An+exploration+of+repetition+as+a+factor+in+healing+in+art+psychotherapy%2C+is+hope+a+feature+of+this+healing%3F+Case+illustration%2C+a+man+with+bipolar+affective+disorder&rft.DBID=NDL&rft.au=Sorge%2C+Bernice&rft.date=1999&rft.pub=National+Library+of+Canada+%3D+Biblioth%C3%A8que+nationale+du+Canada&rft.externalDBID=n%2Fa&rft.externalDocID=oai_union_ndltd_org_LACETR_oai_collectionscanada_gc_ca_OOAMICUS_22988989&paramdict=en-us) (Thesis)

Custom ILL links:

- Article: `https://library.cca.edu/cgi-bin/koha/opac-illrequests.pl?op=add_form&backend=Standard&type=article&title=<?title?>&volume=<?volume?>&issue=<?issue?>&year=<?Year?>&issn=<?issnh?>&article_title=<?atitle?>&article_author=<?au?>&published_date=<?date?>&pages=<?pages?>&doi=<?DOI?>`
- Book: `https://library.cca.edu/cgi-bin/koha/opac-illrequests.pl?op=add_form&backend=Standard&type=book&title=<?title?>&volume=<?volume?>&year=<?Year?>&isbn=<?isbn?>&author=<?au?>&publisher=<?pub?>&published_place=<?place?>&part_edition=<?edition?>&doi=<?DOI?>`
- Thesis: `https://library.cca.edu/cgi-bin/koha/opac-illrequests.pl?op=add_form&backend=Standard&type=thesis&title=<?title?>&author=<?au?>&institution=<?pub?>&published_date=<?date?>&doi=<?DOI?>`
- Unknown: `https://library.cca.edu/cgi-bin/koha/opac-illrequests.pl?op=add_form&backend=Standard&type=resource&title=<?title?>&author=<?au?>&publisher=<?pub?>&published_place=<?place?>&year=<?Year?>&part_edition=<?edition?>&volume=<?volume?>&pages=<?pages?>&isbn=<?isbn?>&issn=<?issnh?>&doi=<?DOI?>`

You can replace the domain and beginning of the query string with http://ae.preview.serialssolutions.com/?SS_LibHash=EY7MR5FU9X& to immediately preview changes, which otherwise do not take effect for a day.

For our custom ILL link settings, we want them to:

- Only display on the No Result Page (other places are not relevant)
- Location: Inside Rectangle and Display as button ☑️
- Don't require all metatags (many are often missing)
- Limited to the specific format that matches the type
