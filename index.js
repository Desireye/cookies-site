const consentForm = document.getElementById("consent-form")
const exitBtn = document.getElementById("exit-btn")
const acceptBtn = document.getElementById("accept-btn")
const declineBtn = document.getElementById("decline-btn")
const btnsContainer = document.getElementById("form-btns-container")
const popUp = document.getElementById("pop-up")
const popUpText = document.getElementById("pop-up-text")


setTimeout(function() {
    popUp.style.display = "block"
    exitBtn.style.cursor = "not-allowed"
}, 5000)

exitBtn.addEventListener("click", function() {
    popUp.style.display = "none"
})

declineBtn.addEventListener("mouseover", function() {
    btnsContainer.classList.toggle("reverse")
    console.log("hover")
}) 

consentForm.addEventListener("submit", function(e) {
    e.preventDefault()

    popUpText.innerHTML = 
    `<img class="load-gif" src="./giphy.gif" alt="">
    <p id="upload-p">Taking your data...</p>`

    setTimeout(function() {
        document.getElementById("upload-p").innerText = `Selling data to make big bucks...`
    }, 3000)

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get("fullName")

    setTimeout(function() {
        document.getElementById("pop-up-content").innerHTML =
        `<h2>Ha! <span class="highlighted-text">${fullName}</span>, you absolute knob!<?h2>
        <p>Thank you for selling your soul, I'll use the money to buy an S23!</p>
        <img class="end-gif" src="./200.webp" alt="">`

        exitBtn.disabled = false
    }, 6000)
})

