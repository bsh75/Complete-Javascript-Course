// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function helloAfterTime(time_ms) {
    await sleep(time_ms)
    console.log("hello world")
}
helloAfterTime(200)

// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.
async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/nonexistent')
        const data = await res.json()
        console.log(data)
    } catch(e) {
        console.log("Error fetching data")
    }
}
fetchData()

// 3. Write an async function named fetchUserData that makes a GET request to 'https://the-one-api.dev/v2/' using async/await. Log the response to the console, handling any errors that might occur.
async function fetchUserData() {
    try {
        const res = await fetch('https://the-one-api.dev/v2/')
        const data = await res.json()
        console.log(data)
    } catch(e) {
        console.log("GET request failed")
    }
}
fetchUserData()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await. Ensure you set the appropriate headers and catch any errors.
async function sendUserData() {
    try {
        const user = { name: "John", age: 20 }
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const success = await fetch('https://api.example.com/users', options)
        console.log(success)
    } catch(e) {
        console.log("POST request failed")
    }
}
fetchUserData()
