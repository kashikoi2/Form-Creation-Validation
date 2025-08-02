// Async function to fetch and display user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Container where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data
        const response = await fetch(apiUrl);

        // Convert to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list element
        const userList = document.createElement('ul');

        // Loop through each user and add to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
