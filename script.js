// your code here
function updateURL() {
        const name = document.getElementById('name').value;
        const year = document.getElementById('year').value;
        const baseURL = 'https://localhost:8080/';
        const queryString = `?name=${encodeURIComponent(name)}&year=${year}`;
        document.getElementById('url').textContent = baseURL + queryString;
    }