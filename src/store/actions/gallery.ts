import axios from 'axios';
import {FETCH_IMGS_SUCCESS,
        FETCH_IMGS_ERROR,
        FETCH_IMGS_START} from './actionTypes';
import {Dispatch} from 'redux';
import ImageModel from '../../entities/ImageModel.model';

export function fetchImgs(){
    return async (dispatch:Dispatch) => {
        dispatch(fetchImgsStart());
        try{

            let response = await axios.get(`https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9`);
            dispatch(fetchImgsSuccess(response.data));
        }catch(e){
            console.log(e);
        }        
    }
}

export function fetchImgsStart() {
    return {
        type: FETCH_IMGS_START
    }
}

export function fetchImgsSuccess(imgs: ImageModel[]){
    return {
        type: FETCH_IMGS_SUCCESS,
        imgs
    }

}

