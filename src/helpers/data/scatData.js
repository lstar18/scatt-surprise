import axios from 'axios';
import firebaseConfig from '../apiKeys.json';


const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getScatsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbScats = response.data;
      const scats = [];
      if (fbScats !== null) {
        Object.keys(fbScats).forEach((fbId) => {
          fbScats[fbId].id = fbId;
          scats.push(fbScats[fbId]);
        });
      }
      resolve(scats);
    })
    .catch((err) => reject(err));
});
const getSingleScat = (scatId) => axios.get(`${baseUrl}/scats/${scatId}.json`);
const postScat = (newScat) => axios.post(`${baseUrl}/scats.json`, newScat);
const removeScat = (scatId) => axios.delete(`${baseUrl}/scats/${scatId}.json`);
const putScat = (scatId, editedScat) => axios.put(`${baseUrl}/scats/${scatId}.json`, editedScat);

export default {
  getScatsByUid, getSingleScat, postScat, removeScat, putScat,
};
