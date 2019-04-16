export const INDEX = '/';
export const SEED = '/seed';
export const GATHER = '/gather';
export const TRAIN = '/train';
export const PREDICT = '/predict';
export const TREE_MODEL = '?modelName=TREE'
export const RANDOM_FOREST_MODEL = '?modelName=RAND'
const BASE_URL = 'https://squalorarchives-squads-api.herokuapp.com';

export function getRequest(endpoint) {
  let options = {
    method: 'GET'
  };

  let url = BASE_URL + endpoint;
  
  fetch(url, options)
    .then(function(response) {
      console.log('response...');
      response.text().then(function (text) {
        console.log('text from response is ...' + text);
        console.log(text);
      });
      
    })
    .catch(error => console.error('Error:', error));
}

export function postRequest(endpoint, param, data) {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let url = BASE_URL + endpoint + param;

  fetch(url, options)
    .then(function(response) {
      console.log('response.json()...');
      
      console.log(response.json());
    })
    .catch(error => console.error('Error:', error));
}