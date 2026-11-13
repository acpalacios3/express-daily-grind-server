## REFLECTION:

**1. What is the difference between res.send() and res.**
sendFile()? When would you use one over the other?

The difference between res.send() and res.sendFile() is that res.send() sends a response directly, such as text or HTML content, while res.sendFile() sends an existing file to the browser.
I would use res.send() to send a simple message and res.sendFile() when I want to display an HTML page stored in my project.


**2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?**

The path module is necessary because it helps us create correct file paths when working with files and directories.

A relative path depends on the current working directory. If we run the server from a different directory, the path might not point to the correct file.
Using path.resolve() converts a relative path into an absolute path, which helps Express find the file correctly when using res.sendFile().

**3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?**

I would follow these steps:

* Create a new file called menu.html inside the public folder.
* Add the HTML content for the menu page.
* Create a new GET route in server.js using app.get('/menu', ...).
* Use res.sendFile() and path.resolve() to send the menu.html file.
* Test the new route by visiting http://localhost:3000/menu in the browser.