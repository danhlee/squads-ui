export const INDEX = '/';
export const SEED = '/seed';
export const GATHER = '/gather';
export const TRAIN = '/train';
export const PREDICT = '/predict';
export const TREE_MODEL = '?modelName=TREE'
export const RANDOM_FOREST_MODEL = '?modelName=RAND'
const BASE_URL = 'https://squalorarchives-squads-api.herokuapp.com';

export function getRequest(endpoint, responseCallback, modelParam) {
  let options = {
    method: 'GET'
  };

  let url = BASE_URL + endpoint;
  
  if (modelParam) {
    url = url + modelParam;
  }
  console.log('url = ' + url);
  fetch(url, options)
    .then(function(response) {
      console.log('response...');
      response.text().then(function (text) {
        console.log('text from response is ...' + text);
        responseCallback(endpoint, text);
      });
      
    })
    .catch(error => console.error('Error:', error));
}

export function postRequest(endpoint, modelParam, data, setWinnerCallback) {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let url = BASE_URL + endpoint + modelParam;

  fetch(url, options)
    .then(function(response) {

      console.log('JSON.stringify(response)...');
      let json_result = response.json();
      
      console.log(json_result);
      return json_result;
    })
    .then( promise => {
      console.log('promise[winner] = ');
      console.log(promise['winner']);
      setWinnerCallback(promise['winner']);
    })
    .catch(error => { 
      console.error('Error:', error);
      setWinnerCallback('0');
    });
}

