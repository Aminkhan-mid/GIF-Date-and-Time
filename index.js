

const timeEl = document.getElementById("time")
const dateEl = document.getElementById("date")
const wordsEl = document.getElementById("words")
const lineEl = document.getElementById("line")
const mainImg = document.getElementById("mainImg")
const refreshBtn = document.getElementById("refresh-btn")


updateTime()
updateDate()
updateLine()
updateImage()
setInterval(updateTime, 1000)
setInterval(updateDate, 86400000)
setInterval(updateLine, 3600000)
setInterval(updateImage, 3600000)



function updateTime(){
    const times = new Date()
    const timeString = times.toLocaleTimeString('en-US', {hour12: true})

    timeEl.innerHTML = timeString
}

function updateDate(){
    const dates = new Date()

    const day = getDayName(dates.getDay())
    const num = String(dates.getDate()).padStart(2, '0')
    const month = getMonthName(dates.getMonth()+1)

    dateEl.innerHTML = `${day} | ${num} ${month}`
}
function getMonthName(monthNumber){
    const monthNames = [
         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[monthNumber - 1]
}
function getDayName(dayNumber){
    const daysName = [
       "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
    return daysName[dayNumber]
}



function updateLine(){
    const randomLines = [
        "✨ Embrace the magic within ✨",
        "🌌 Lost in the cosmos 🌌",
        "🍃 Whispers of nature 🍃",
        "🌟 Fail forward, rise higher! 🌟",
        "🌊 Ride the wave 🌊",
        "🌱 Grow as you go 🌱",
        "🌠 Chase the stars 🌠",
        "🌈 Colors of the soul 🌈",
        "🍂 Fall into serenity 🍂",
        "🎐 Breezes of peace 🎐",
        "🌙 Dreams under the moon 🌙",
        "☁️ Float like a cloud ☁️",
        "🍁 Leaves of change 🍁",
        "⚡ Charge your spirit ⚡",
        "🌻 Radiate positivity 🌻",
        "🦋 Flutter by dreams 🦋",
        "✨ Shine from within ✨",
        "💫 Reach for the stars 💫",
        "🍀 Luck is in the air 🍀",
        "🌅 Dawn of new beginnings 🌅",
        "🍇 Savor every moment 🍇",
        "🌵 Strong and resilient 🌵",
        "🔥 Burn bright 🔥",
        "🌌 Mysteries await 🌌",
        "🍒 Pick the sweet moments 🍒",
        "🌟 Light up the world 🌟",
        "🕊️ Fly free 🕊️",
        "🌼 Pure and simple 🌼",
        "🍉 Refresh your soul 🍉",
        "🌌 Explore the unknown 🌌"
    ]

    const randomIndex = Math.floor(Math.random()*randomLines.length)

    lineEl.textContent = randomLines[randomIndex]
}



function updateImage(){
    const mainImages = [
        "https://i.pinimg.com/originals/73/48/07/734807779ad6cc5b0620359f950d2ff1.gif",

        "https://i.pinimg.com/originals/ce/74/fc/ce74fcc5fb025161a6dad9cdd04e181a.gif",

        "https://i.pinimg.com/originals/a5/d2/d5/a5d2d52027672b5ec479c27cf0b26bed.gif",

        "https://i.pinimg.com/originals/d3/f7/e3/d3f7e3c37d8fb937ad1762578048c2d2.gif",

        "https://i.pinimg.com/originals/58/ef/84/58ef8425f24e05c06c122f123efbe122.gif",

        "https://i.pinimg.com/originals/58/70/72/587072da657dcee567164c2ff718e08e.gif",

        "https://i.pinimg.com/originals/ba/3c/50/ba3c505577a51ae129d55361f442fbaf.gif",

        "https://i.pinimg.com/originals/8c/11/44/8c114430060b6eb7d34b130e8eb1328d.gif",

        "https://i.pinimg.com/originals/b2/e8/a8/b2e8a8d584b2d3a40bfd6569d6bfe647.gif",

        "https://i.pinimg.com/originals/57/80/4f/57804f2e1711e57c0d9ae6579199eced.gif",

        "https://i.pinimg.com/originals/3b/21/04/3b21042374d2ac4f282d8be6f521104e.gif",

        "https://i.pinimg.com/originals/91/cc/30/91cc30e404ebd860d47d4ee61bdf61dc.gif",

        "https://i.pinimg.com/originals/7d/87/f2/7d87f22479fce4f5014a586bd09f6418.gif",

        "https://i.pinimg.com/originals/47/44/9d/47449db5a1acdaf048a40605c1b6d101.gif"
    ]
    const randomIndex = Math.floor(Math.random() * mainImages.length) 

    mainImg.src = mainImages[randomIndex]
}


refreshBtn.addEventListener("click", function(){
    clearInterval(updateImage())
    updateImage()
    updateLine()
})