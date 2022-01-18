import axios from 'axios';

const db = axios.create({
  baseURL: 'https://macroprojectapi.herokuapp.com/api',
});

const getUser = userEmail => {
  return db
    .get(`/user/${userEmail}`)
    .then(res => {
      return res.data.user;
    })
    .catch(error => console.log(error));
};

const postUser = newUser => {
  return db
    .post('/user', newUser)
    .then(res => {
      return res.data.user;
    })
    .catch(error => console.log(error));
};

export {postUser, getUser};
