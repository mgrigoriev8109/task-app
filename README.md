Overall, this project should render an input field and a submit button
With the submit button a user should be able to add content to a tasks
array that is managed *in state* 

This file hould just render tasks, while App.js handles the input 
field with the logic

The focus is on using event handlers and dealing with forms and state

Use .map() to map over your tasks array, providing a unique key to 
each item

TODO:
1. Add a form for input (in App.js)
2. The form should have an event handler
3. That event should save the input in an array `tasksArray`
4. Then map render HTML list elements for display (in Overview.js)