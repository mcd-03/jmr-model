# JMR-Model
## Function
Data management at scale takes automation and scripting to reduce both the time costs and the likelihood of errors. Throughout the course of a school year, teachers in my building periodically need access to current data on their students. For a large building like mine, this means managing an update of more than 150k associated data points, six times a year. This short script creates a model of my school building and defines the methods needed to handle updates. By utilizing a model of my building, I can call these updates with natural language. For example the call JMR.update() will run the process for the entire building, while Adnan.update() would only update the records for that specific teacher. Initializing data structures alongside the model allows updates on the complete school or on a vertical (same subject but different grades), horizontal (same grade but different subjects), select (same subject and same grade), or individual basis.
## Technology
- Codebase written as a Google Apps Script
- File extensions are .js files; however, to run in an AppsScripts, the extensions should be converted to .gs files (which are modern JavaScript with preloaded Google libraries).
- This project would naturally be better written to interact with the databases directly via an API. Unfortunately, the district does not provide API access to the databases and so I use two different spreadsheets to serve as the data source.
## Considerations
- Naturally, student data must be kept secure. In deployment, each teacher model has a unique URL that houses their specific students' data. Only they and other appropriate staff can view these URLs. Although the view settings are locked, all URLs are replaced with hash marks in this repository for additional security.
- Google Apps Scripts automatically handle modules imports - if a similar project was written in vanilla js, users would need to handle exports and imports manually.
## Result
Although small, this project has saved my school dozens of hours of work. It is incredibly scaleable and could be applied to handle updates for progressively larger organizations, even at the district level.