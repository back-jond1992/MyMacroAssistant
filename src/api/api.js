import axios from 'axios';

const db = axios.create({
  baseURL: 'https://macroprojectapi.herokuapp.com/api',
});

const postUser = newUser => {
  return db
    .post('/user', newUser)
    .then(res => {
      return res.data.user;
    })
    .catch(error => console.log(error));
};

export default postUser;
