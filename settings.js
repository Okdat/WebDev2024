// Toggle switches and log their state
document.querySelectorAll('input[type="checkbox"]').forEach(toggle => {
    toggle.addEventListener('change', function() {
        console.log(`${this.id} is now ${this.checked ? 'On' : 'Off'}`);
        // You can store the value in local storage or send it to a backend server
    });
});

// Handle the "Pin to Taskbar" button click
document.querySelector('.pin-taskbar-btn').addEventListener('click', function() {
    alert("Application pinned to taskbar (simulated action).");
});

// Manage Account button
document.querySelector('.manage-account-btn').addEventListener('click', function() {
    alert("Redirect to Manage Account (simulated action).");
});

// Sign Out button
document.querySelector('.sign-out-btn').addEventListener('click', function() {
    alert("You have signed out (simulated action).");
});

// Handle dropdown change events (for Week Start and App Badge)
document.querySelector('#week-start').addEventListener('change', function() {
    console.log(`Week starts on: ${this.value}`);
});

document.querySelector('#app-badge').addEventListener('change', function() {
    console.log(`App badge set to: ${this.value}`);
});
