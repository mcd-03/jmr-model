# JMR-Model
## Function
Data management at scale takes automation and scripting to reduce both the time costs and the likelyhood of errors. Throughout the course of a school year, teachers in my building periodically need access to current data on their students. For a large building like mine, this means mangaging an update of roughly 52,000 associated data points, six times a year. This short script creates a model of my school buidling and defines the methods needed to handle updates. By utilizing a model of my building, I can call these updates with natural language. For example the call JMR.update() will run the process for the entire building, while Adnan.update() would only update the records for that specific teacher. Initializing data structures alongside the model allows updates on the complete school or on a vertical (same subject but different grades), horizontal (same grade but different subjects), select (same subject and same grade), or individual basis.
## Technology
- Codebase written as a Google Apps Script
- Files in the codebase are .gs files which are modern JavaScript with preloaded Google libraries
## Considerations
- Naturally, student data must be kept secure. Each teacher model has a URL that houses their specific students' data which only they and other appropriate staff can view. (Although the view settings are locked these URLs are replaced with hash marks in this repository for additional security.)
- Google Apps Scripts automatically handle modules imports - if this project with written in vanilla js, users would need to import manually
## Result
Although small, this project has saved me dozens of hours of work so far. It is incredibly scaleable and could be applied to handle updates for progressively larger organizations, even at the district level.
