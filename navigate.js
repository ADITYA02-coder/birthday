// Save audio state before navigation
function saveAudioState() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        localStorage.setItem('audioTime', audio.currentTime);
        localStorage.setItem('audioMuted', audio.muted);
    }
}

// Navigate to memories.html
function goToMemories() {
    saveAudioState();
    window.location.href = 'memories.html';
}

// Alternative navigation methods
function navigateToMemories() {
    window.location.pathname = window.location.pathname.replace('index.html', 'memories.html');
}

// Open memories in new tab
function openMemoriesNewTab() {
    window.open('memories.html', '_blank');
}

// Back to home from memories page
function goHome() {
    saveAudioState();
    window.location.href = 'index.html';
}

// Initialize audio state on page load
function initializeAudioState() {
    const audio = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    if (!audio || !button) return;
    
    // Get saved audio state from localStorage
    const isAudioMuted = localStorage.getItem('audioMuted');
    const savedTime = parseFloat(localStorage.getItem('audioTime')) || 0;
    
    // Restore audio playback position
    try {
        audio.currentTime = savedTime;
    } catch (e) {
        console.log('Could not set audio time');
    }
    
    if (isAudioMuted === 'false') {
        // Audio was unmuted on another page, unmute it here too
        audio.muted = false;
        audio.play().catch(err => console.log('Autoplay prevented:', err));
        button.textContent = '🔊 Mute Music';
        button.style.backgroundColor = '#ff6b9d';
    } else {
        // Keep it muted by default
        audio.muted = true;
        button.textContent = '🔇 Unmute Music';
        button.style.backgroundColor = '#a84f7c';
    }
    
    // Save audio time periodically
    setInterval(() => {
        if (!audio.paused && !audio.muted) {
            localStorage.setItem('audioTime', audio.currentTime);
        }
    }, 1000);
    
    // Save audio state before leaving page
    window.addEventListener('beforeunload', saveAudioState);
}

// Toggle background music
function toggleAudio() {
    const audio = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    if (audio.muted) {
        audio.muted = false;
        audio.play().catch(err => console.log('Autoplay prevented:', err));
        button.textContent = '🔊 Mute Music';
        button.style.backgroundColor = '#ff6b9d';
        localStorage.setItem('audioMuted', 'false');
    } else {
        audio.muted = true;
        audio.pause();
        button.textContent = '🔇 Unmute Music';
        button.style.backgroundColor = '#a84f7c';
        localStorage.setItem('audioMuted', 'true');
    }
    localStorage.setItem('audioTime', audio.currentTime);
}

// Generic navigation function
function goToPage(pageName) {
    saveAudioState();
    window.location.href = pageName;
}

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', initializeAudioState);
