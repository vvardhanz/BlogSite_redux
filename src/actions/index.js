import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=12345asdfghjkl';

export function fetchPosts() {
   const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

   return {
       type: FETCH_URL,
      payload: request
   };
}
