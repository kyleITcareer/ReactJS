import axios from 'axios';

const KEY = 'AIzaSyDn1ifwgS0uzI0YrIgmJw6-pEo-f0atD-g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});