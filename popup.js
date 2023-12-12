const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click",() => {    
    chrome.tabs.query({active: true}, (tabs) => {
        const tab = tabs[0];
        if (tab) {
            alert(tab.id)
        } else {
            alert("There are no active tabs")
        }
    })
})

