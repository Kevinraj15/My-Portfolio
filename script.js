const darkLight = document.querySelector(".dark-light");

const darkness = document.querySelector("#darkness");

const lightness = document.querySelector("#lightness");

const body = document.querySelector("body");

const resume = document.querySelector(".resume");

const innerCard = document.querySelectorAll(".innercard");

const cardIcon = document.querySelectorAll(".card-icon");

const contact = document.querySelector("form");

const footer = document.querySelector("footer");




darkLight.addEventListener("click", function() {
    if (darkness.style.opacity === "1") {
        body.style.backgroundColor = "#1d1818";  // Dark mode
        darkness.style.opacity = "0";            // Hide moon (dark icon)
        lightness.style.opacity = "1";           // Show sun (light icon)
        body.style.color = "white";
        lightness.style.color = "black";
        resume.style.backgroundColor = "white";
        resume.style.color = "black";
        contact.style.backgroundColor="White";
        contact.style.color="black";
        footer.style.backgroundColor="white";
        footer.style.color="black";

        // Apply changes to all inner cards
        innerCard.forEach(function(card) {
            card.style.backgroundColor = "white";
            card.style.color = "black";
        });

        // Apply changes to all card icons
        cardIcon.forEach(function(icon) {
            icon.style.color = "black";
        });



    } else {
        body.style.backgroundColor = "white";    // Light mode
        lightness.style.opacity = "0";           // Hide sun (light icon)
        darkness.style.opacity = "1";            // Show moon (dark icon)
        body.style.color = "black";
        resume.style.backgroundColor = "black";
        resume.style.color = "white";
        footer.style.backgroundColor="black"
        footer.style.color="white"
        // Apply changes to all inner cards
        innerCard.forEach(function(card) {
            card.style.backgroundColor = "black";
            card.style.color = "white";
        });

        // Apply changes to all card icons
        cardIcon.forEach(function(icon) {
            icon.style.color = "white";
        });

        
    }
});

function sidebarShow(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display="flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display="none" ;

}

function sidebarItems(){
    const sidebarHidden =document.querySelector(".sidebar")
    sidebarHidden.style.display="none";  
}


