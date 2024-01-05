import axios from "axios";


const baseUrl = process.env.REACT_APP_RapidAPI_BaseUrl;
let apiKey = process.env.REACT_APP_RapidAPI_Key;
let apiHost = process.env.REACT_APP_RapidAPI_Host;

function fetchApi(searchInput, setProductDetails) {
    axios.get(baseUrl, {
        params: {
        q: searchInput,
        country: 'in',
        language: 'en',
        limit: '10'
        },
        headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
        }
      })
      .then((response) => {
        setProductDetails(response.data.data);
      })
}

export default fetchApi