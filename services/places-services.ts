import * as Api from '../services/api'
import { appConfig } from '../src/screens/config'

const getPlaces = async (categoryName: string) => {
    try {
        const response = await Api.get(`/textsearch/json?query=${categoryName}%20in%20Istanbul&key=${appConfig.googleApiKey}&language=en`)
        return response;
    } catch(error) {
        return error
    }
}

const getPlaceDetail = async (placeId: string) => {
    try {
        const response = await Api.get(`/details/json?place_id=${placeId}&key=${appConfig.googleApiKey}&language=en`)
        return response;
    } catch(error){
        return error
    }
}
export const placesService = { getPlaces,getPlaceDetail };


