export const FETCH_IMGS_START = 'FETCH_IMGS_ERROR';
export const FETCH_IMGS_SUCCESS = 'FETCH_IMGS_SUCCESS';
export const FETCH_IMGS_ERROR = 'FETCH_IMGS_ERROR';

export interface FetchImgsStartAction{
    type: typeof FETCH_IMGS_START
}

export interface FetchImgsSuccessAction{
    type: typeof FETCH_IMGS_SUCCESS,
    imgs: []
}

export interface FetchImgsErrorAction{
    type: typeof FETCH_IMGS_ERROR,
    error: any
}

export interface StoreState{
    loading: boolean,
    imgs: []
}

export type FetchImgsActionTypes = FetchImgsStartAction | FetchImgsSuccessAction | FetchImgsErrorAction;