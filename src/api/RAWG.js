const API_URL = 'https://api.rawg.io/api/games?';
const API_KEY = '58c6109cb1d443ada07b57a19bb835b0&dates=2020-01-01,2025-02-25'

async function FetchGamesData() {
    try {
    const response = await fetch(`${API_URL}key=${API_KEY}`)
    const data = await response.json();
    console.log(data)
    } catch(error) {
    console.log(error)
    }
}

export default FetchGamesData;
