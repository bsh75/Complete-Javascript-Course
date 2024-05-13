// 1. Basic DOM Manipulation: How do you select an element with the ID main-title and change its text content to "Welcome to the DOM World"?
let main_title = document.getElementById("main-title")
main_title.innerText = "Welcome to the DOM world"


// 2. Event Handling: Write the JavaScript code to listen for a click event on a button with the ID submit-btn and alert "Button Clicked!".
let submit_button = document.getElementById("submit-btn")
function button_successful() {
    alert("Button clicked!!")
}
submit_button.addEventListener("click", button_successful)


// 3. Dynamic Styling: How can you change the background color of a <div> with the class highlight to yellow when a user hovers over it using JavaScript?
let highlight_div = document.querySelectorAll('.highlight')
function changeBackgroundToYellow(element) {
    highlight_div.background = 'yellow'
}
highlight_div.addEventListener("mouseover", changeBackgroundToYellow(highlight_div))


// 4. Element Creation and Insertion: Describe how to create a new <li> element, set its text content to "New Item", and append it to an existing <ul> with the ID list-container.
let list_container = document.getElementById("list-container")
let new_list_item = document.createElement("li")

new_list_item.innerText = "New Item"

document.list_container.appendChild(new_list_item)


// 5. Form Handling: Write a script to prevent the default submission of a form with the ID form-example and instead console log the value of a text input field within the form when the submit button is clicked.
let formExample = getElementById("form-example")

function formSubmission(event) {
    event.preventDefault()
    console.log(formExample.value)
}

formExample.addEventListener("submit", formSubmission)


// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking on a <button> contained within a <div> that both have click event listeners attached.

let propBtn = document.querySelector('button')

function stopButtonPropogation (e) {
    e.stopPropogation()
}

propBtn.addEventListener('click', stopButtonPropogation)

// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring that if the class is present it gets removed, and if it's not, it gets added?
let targetElement = document.getElementById('element_id')

function toggleClass() {
    targetElement.classList.toggle('active') // Where 'active' is the class we are wanting to toggle
}

targetElement.addEventListener('click', toggleClass)

// 8. Advanced Event Handling: Write JavaScript code to change the text content of a paragraph element to display the current time when a button is clicked.
let paragraph = document.querySelector('p')

function updateDate() {
    paragraph.innerText = new Date()
}

let button = document.querySelector('b')

button.addEventListener('click', updateDate)

// 9. Event Listener Removal: How do you remove an event listener from an element, and why might you need to do this?

document.getElementById('element-to-remove').removeEventListener('click', functionToBeCalled)


// 10. Manipulating Attributes and Properties: Write JavaScript code to change the src attribute of an <img> element and explain the difference between attributes and properties in the context of DOM elements.

let image = document.querySelector('img')

image.setAttribute('src', "newLocation/newImage.png")

// PROPERTIES vs ATTRIBUTEs: Properties are handled in JavaScript, Attributes are handled in HTML

// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store extra information and how to access this information using JavaScript.

let information = document.getElementById('info')
console.log(information.dataset.userId) // I think this wrong?

//<div id="info" data-user-id="12345" data-user-role="admin"></div>