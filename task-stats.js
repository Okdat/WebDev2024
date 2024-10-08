// task-stats.js

// Tasks by Priority (High, Medium, Low)
const priorityData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
        label: 'Tasks by Priority',
        data: [40, 50, 30], // Example data, replace with dynamic values
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
    }]
};

// Config for Priority Chart
const priorityConfig = {
    type: 'doughnut',
    data: priorityData,
};

// Render Priority Chart
new Chart(
    document.getElementById('priorityChart'),
    priorityConfig
);

// Data for Tasks by Status 
const statusData = {
    labels: ['Pending', 'In-Progress', 'Completed', 'Deployed', 'Deferred'],
    datasets: [{
        label: 'Tasks by Status',
        data: [20, 10, 80, 5, 5], // Example data, replace with dynamic values
        backgroundColor: ['#ff6384', '#36a2eb', '#4caf50', '#ffcd56', '#9c27b0'],
    }]
};

// Config for Status Chart
const statusConfig = {
    type: 'bar',
    data: statusData,
};

// Render Status Chart
new Chart(
    document.getElementById('statusChart'),
    statusConfig
);
