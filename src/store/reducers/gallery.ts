import {FETCH_IMGS_SUCCESS,
        FETCH_IMGS_ERROR,
        FETCH_IMGS_START} from '../actions/actionTypes';
import {FetchImgsActionTypes, StoreState} from '../actions/actionTypes';

const initialState: StoreState = {
    loading: false,
    imgs: []
}

export function galleryReducer(state: StoreState = initialState, action: FetchImgsActionTypes): StoreState{

    switch(action.type){
        case FETCH_IMGS_START: return {...state, loading: true};
        case FETCH_IMGS_SUCCESS: return {...state, imgs: action.imgs, loading: false};
        default: return state;
    }
}