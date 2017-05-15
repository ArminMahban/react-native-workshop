import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
<<<<<<< HEAD
const API_KEY = 'AIzaSyCzmOIEgx0_GEoET959XL10mwj7u7YXRbE';
=======
const API_KEY = 'AIzaSyBLXbmUj5dg76TZAzQUcX5fPSTu27PHKMU';
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

<<<<<<< HEAD
export default youtubeSearch;
=======
module.export = youtubeSearch;
>>>>>>> 32ecef2fad99e58a9337e96f09c22f5213cd5677
