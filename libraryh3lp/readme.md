# Libraryh3lp Chat Reference

Customizations for our chat widgets that display in various places (libraries.cca.edu, moodle.cca.edu, library.cca.edu, Summon).

Every chat instance is composed of a **Snippet** (included here) and a **Skin**. Snippets can include HTML/CSS/JS and handle the display of the chat when it is not yet active. Skins are the look of the actual chat interface. We configure our two chat widgets to look distinct so Libraries chat (`cca-libraries-queue
`) is dark blue #0076a0 and Instructional Support is purple #721ea0 (`cca-instructional-support`).

# Dismissible Chat Tabs

We asked Libraryh3lp to make us able to dismiss the chat tab since a few users complained about it being annoying when they're not using it. The majority of the "offline" appearance code is devoted to this task. The tab sets a `libraryh3lp-tab-shhhh=true` cookie when it is closed which persists for the length of the current browser session or until the cache is cleared.
