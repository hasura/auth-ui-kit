import fetch from 'isomorphic-fetch';

const makeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json().then(resp => {
            resolve(resp);
          });
        }
        return response.json().then(resp => {
          reject(resp);
        });
      })
      .catch(resp => {
        reject(resp);
      });
  });
};

export default makeRequest;
