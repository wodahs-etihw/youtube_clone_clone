import axios from "axios";

export const fetchDataFromApi = async (url) => {
    const BASE_URL = "https://youtube138.p.rapidapi.com/search/";
    const options = {
        params: {
          q: 'despacito',
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '01f31f30f5mshaf3dcb37e0360b7p1bd686jsnbdb09da2e30e',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
    const { data } = await axios.get(`${BASE_URL}`, options);
    console.log(data);
    return data;
};

