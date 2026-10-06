/*Coin Flip function must be randomized by the Server
- Must have a button to start for user (drop down for heads n tails)
-Must have a heads and a tails
-Must have an image or visual for user
-Maybe an alert or message of outcome*/ 

document.querySelector('#select').addEventListener('click', getSelection)

function getSelection(){

const coinSelection = document.querySelector('#coinFlip').value

fetch(`/api?coinFlip=${coinSelection}`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    document.querySelector('#winner').textContent = data.result
})


}