import axios from 'axios';

const db = axios.create({
  baseURL: 'https://macroprojectapi.herokuapp.com/api',
});

// MongoDB API calls

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

const patchUser = (id, update) => {
  return db
    .post(`/user${id}`, update)
    .then(res => {
      console.log(res.data.user);
      return res.data.user;
    })
    .catch(error => console.log(error));
};

// Calorie Ninja API calls

const calorieNinja = axios.create({
  baseURL: 'https://api.calorieninjas.com/v1/nutrition',
});

const header = {'X-Api-Key': '63e4pfia0VbRiXY0jORQ0w==zdqPspX0fSv159Ni'};

const getFood = query => {
  return calorieNinja
    .get(`?query=${query}`, {
      headers: header,
    })
    .then(res => {
      return res.data.items;
    })
    .catch(error => console.log(error));
};

export {postUser, getUser, patchUser, getFood};
