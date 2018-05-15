import axios from 'axios'
const API_URL = 'http://localhost:8088/api/curriculums';

///Function GET
export function getCurriculums() {
  const response = axios.get(API_URL);
  console.log('Get Curriculums', response);
  return{
    type: 'GET_CURRICULUMS',
    payload: response
  }
}

//Function CREATE
export function createCurriculums(data) {
  const response = axios.post(API_URL, data);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}

//Function DELETE
export function deleteCurriculums(id) {
  const response = axios.delete(API_URL + '/' + id);
  return {
    type: 'GET_CURRICULUMS',
    payload: response
  }
}
