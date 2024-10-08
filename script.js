document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', event => {
        // Get data-target of the pressed item
        const target = event.currentTarget.getAttribute('data-target');
        const title = document.getElementById('content-title');
        const description = document.getElementById('content-description');
        const contentDiv = document.getElementById('content-area');

        switch (target) {
            case 'dashboard':
                title.innerText = 'Dashboard';
                description.innerText = 'Welcome to your dashboard, where you can see an overview of your tasks.';
                break;
            case 'completed':
                title.innerText = 'Completed Tasks';
                description.innerText = 'These are the tasks you have completed.';
                break;
            case 'pending':
                title.innerText = 'Pending Tasks';
                description.innerText = 'These tasks are pending and awaiting action.';
                break;
            case 'in-progress':
                fetch('card.html') //connect to inProgress.html
                    .then(response => response.text())
                    .then(data => {
                        // Just only change in content
                        const contentDiv = document.querySelector('.content');
                        contentDiv.querySelector('.content-inner').innerHTML = data; 
                    })
                    .catch(error => console.error('Error fetching the progress content:', error));
                break;
            case 'deployed':
                title.innerText = 'Deployed Tasks';
                description.innerText = 'These tasks have been deployed successfully.';
                
                // Fetch and insert "deployed-tasks.html" 
                fetch('deployed-task.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data; 
                    })
                    .catch(error => console.error('Error fetching deployed-tasks.html:', error));
                break;
            case 'deferred':
                title.innerText = 'Deferred Tasks';
                description.innerText = 'These tasks have been deferred for later action.';
                break;
            case 'add-new':
                title.innerText = 'Add New Tasks';
                description.innerText = ''; 

                // Fetch and insert "add-new-task.html content
                fetch('add-new-task.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => console.error('Error fetching add-new-task.html:', error));
                break;
            case 'task-stats':
                title.innerText = 'Task Stats';
                description.innerText = 'Here you can view statistics about your tasks.';

                // Fetch and insert "task-stats.html" content
                fetch('task-stats.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data; 
                        
                        // Load the Chart.js 
                        if (!window.Chart) {
                            const chartScript = document.createElement('script');
                            chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
                            chartScript.onload = loadTaskStatsScript;
                            document.body.appendChild(chartScript);
                        } else {
                            loadTaskStatsScript();
                        }
                    })
                    .catch(error => console.error('Error fetching task-stats.html:', error));
                break;
            default:
                title.innerText = 'Task Management System';
                description.innerText = 'Chọn một mục từ navigation bar bên trái để bắt đầu.';
        }
    });
});

// Function to load task-stats.js
function loadTaskStatsScript() {
    // Remove existing task-stats.js if already loaded to prevent duplicates
    const existingScript = document.getElementById('task-stats-script');
    if (existingScript) {
        existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'task-stats.js';
    script.id = 'task-stats-script'; // Assign an ID to manage duplicates
    document.body.appendChild(script);
}

// Event when clicking on the menu icon
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const content = document.querySelector('.content');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
    content.classList.toggle('shift-right'); // Adjust content size when navbar is shown/hidden
});

const accountMenu = document.getElementById('account-menu');
const dropdownContent = accountMenu.querySelector('.dropdown-content');

// Event when clicking on the account icon
accountMenu.addEventListener('click', function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close menu when pressed out
window.addEventListener('click', function(event) {
    if (!accountMenu.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});
