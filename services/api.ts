import axios, { AxiosResponse } from "axios";
import { appConfig } from "../src/screens/config";

const baseURL = appConfig.baseGooglePlacesApisUrl

const client = axios.create({
  baseURL: baseURL,
  headers: {'Content-Type': 'application/json'}
});


client.defaults.headers.common["Content-Type"] =
  "application/json";

const get = (url: any): Promise<AxiosResponse> => {

  
  console.log("URL:", baseURL + url)
  return new Promise(async (resolve, reject) => {
    client
      .get(url)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
        console.log("error", error);
      });
  });
};

export { get, client };