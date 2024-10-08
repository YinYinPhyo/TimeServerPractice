# TimeServerPractice

1. Project Title:
HTTP JSON API Time Server

2. Description:
A simple Node.js-based server that returns the current time in various formats, including:

Plain text formatted time.
JSON with hours, minutes, and seconds.
UNIX epoch time.

3. Set up the environment:
Install Node.js on macOS: Follow the Node.js installation guide for macOS.

4. Download Programs and Documentation:
Download Node.js from the official website.
Make sure the http and url modules are available in your Node.js environment (built-in modules).

5. Process of Program Execution:
Clone the repository: git clone <your-repo-url>
Navigate to the project folder: cd <your-project-folder>
Run the time server: node <filename.js> <port-number> Example: node timeServer.js 3000
Access the endpoints:
http://localhost:<port>/api/parsetime?iso=<time>
http://localhost:<port>/api/unixtime?iso=<time>
http://localhost:<port>/api/currenttime

6. Execution Screenshots:
Include screenshots that show the outputs of the server.
Example screenshots:

api/parsetime response.
api/unixtime response.
api/currenttime response.
