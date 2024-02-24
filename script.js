function getGithubData(username) {
    fetch(`https://api.github.com/users/${username}`)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error fetching data:', error));
}