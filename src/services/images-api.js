import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '12875606-ad12fa69868571fc03e76d5a9';

export const fetchedImages = (query, page) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
    )
    .then(
      res =>
        new Promise(resolve =>
          setTimeout(() => {
            resolve(res.data);
          }, 600),
        ),
    );
};

export const eslintGoodBuy = () => null;
