# Diff btw NULL,NAN and undefined
- NaN: Not a number: As the name implies, it is used to denote that the value of an object is not a number. There are many ways that you can generate this error, one being invalid math opertaions such as 0/0 or sqrt(-1)

- undefined: It means that the object doesn't have any value, therefore undefined. This occurs when you create a variable and don't assign a value to it.

- null: It means that the object is empty and isn't pointing to any memory address.

# Events
- Ways of writing events in JS
    - using inline events
    - by calling a func
    - using Inline events(onclick)
    - using event listener

- Event Object
    - Parent of all event objects like mouseEvent,keyboardEvent, inputEvents.

- Diff btw onclick and addEventListeners
    - addEventListeners doesnot overrite existing event handlers whereas onclick overrides any existing onclick.

- Timming based events(window object allows execution of code at specified intervals)
    - setTimeout(func, millisec)
    - setInterval(func,millisec)
    - clearTimeout(func,millisec)
    - clearInterval(func,millisec)

# OOP'S
- Object Literal (key value pair).
- this with normal and arrow functions.
- Array and object destructing.
- Object properties
- Spread and rest operator
- ES7 features
