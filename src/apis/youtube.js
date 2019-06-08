import axios from 'axios';


const KEY = 'AIzaSyAFVcVH23pU-dHA2zt2QFcOy7uhHpWy-y4';

export default axios.create({
   baseURL: 'https://googleapis.com/youtube/v3',
   params: {
       part: 'snippet' ,
       key: KEY,
       maxResults: 5
   }
});



