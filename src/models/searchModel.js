const axios = require('axios');
const { TMDB_API_KEY, TMDB_BASE_URL } = require('../config/env');

const searchContent = async (query) => {
  const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
    params: {
      api_key: TMDB_API_KEY,
      query: query,
      language: 'es-ES',
    },
  });
  return response.data.results;
};

const getContentDetail = async (id, type) => {
  const response = await axios.get(`${TMDB_BASE_URL}/${type}/${id}`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'es-ES',
    },
  });
  return response.data;
};

module.exports = { searchContent, getContentDetail };
