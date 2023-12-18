// Pop-ups are often used for advertising, alerts, forms, or menus.
// popups are of three types: 
// 1. Alert 
// 2. Confirm 
// 3. Prompt

// alert popup example. alerts the user with the given text.
function alertPopup() {
    alert("successful")
}

// confirm popup example. returns true if user clicks OK, false if user clicks Cancel
function confirmPopup() {
    const boolFlag = confirm("Do you like this app?")
    if (boolFlag) {
        alert("You pressed OK. thank you.")
    } else {
        alert("You pressed Cancel.")
    }
}

// prompt popup example. returns the string entered by user. returns empty str/ null if user doesn't enter.
function promptPopup() {
    const name = prompt("Enter your name: ")
    alert(`hey ${name}. thanks for registering.`)
}
