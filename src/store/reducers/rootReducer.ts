import {combineReducers} from 'redux';
import {galleryReducer} from './gallery';

const rootReducer = combineReducers({
    gallery: galleryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;