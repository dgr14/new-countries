import axios from 'axios';

let tokenSource;
export const fetchData = async name => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel('Operation canceled due to new request.');
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`, {
      cancelToken: tokenSource.token
    });

    return { result: data };
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};