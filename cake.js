var cake = document.getElementById("cake");
var cakeCut = false;

// Fireworks function
function createFireworks() {
    const container = document.getElementById("fireworks-container");
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = Math.random() * 100 + "%";
        firework.style.top = Math.random() * 100 + "%";
        firework.style.animationDelay = Math.random() * 0.5 + "s";
        container.appendChild(firework);
    }
    
    // Remove fireworks after animation
    setTimeout(function() {
        container.innerHTML = "";
    }, 3000);
}

// Show birthday message
function showBirthdayMessage() {
    const message = document.getElementById("birthday-message");
    message.classList.remove("hidden");
}

// Show next button
function showNextButton() {
    const button = document.getElementById("next-button");
    button.classList.remove("hidden");
}

// Navigate to next page
function goToNextPage() {
    saveAudioState();
    window.location.href = "loveletter.html";
}

cake.addEventListener("click", function() {
    if (cakeCut) return; // Prevent multiple clicks
    cakeCut = true;
    
    cake.style.transform = "rotate(20deg) scale(0.8)";
    
    // Trigger fireworks immediately
    createFireworks();
    
    // Show birthday message after 500ms
    setTimeout(showBirthdayMessage, 500);
    
    // Show next button after 2 seconds
    setTimeout(showNextButton, 2000);
    
    // Remove cake after 1.5 seconds with fade out animation
    setTimeout(function() {
        cake.style.opacity = "0";
        cake.style.transform = "rotate(20deg) scale(0.8) translateY(-50px)";
        cake.style.transition = "all 0.8s ease-out";
    }, 1500);
});