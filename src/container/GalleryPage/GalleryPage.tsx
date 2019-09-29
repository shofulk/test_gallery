import * as React from 'react';
import {connect} from 'react-redux';
import {fetchImgs} from '../../store/actions/gallery';
import ImageModel from '../../entities/ImageModel.model';
import {AppState} from '../../store/reducers/rootReducer';
import {ThunkAction} from 'redux-thunk';
import Grid from '../../component/Grid/Grid';
import Form from '../../component/Form/Form';

type BoundThunk<
  T extends (...args: any[]) => ThunkAction<any, any, any, any>
> = (...args: Parameters<T>) => ReturnType<ReturnType<T>>;

interface GalleryProps {
    loading: boolean, 
    imgs: ImageModel[],
    fetchImgs: BoundThunk<typeof fetchImgs>;
}

const Gallery = (props: GalleryProps) => {

    React.useEffect(
        () => {
            async function fetchData(){
                await props.fetchImgs();
            }
            fetchData();
        }
        ,[]
    )

    return (
        <div>
            {
                props.loading && props.imgs.length !== 0 ? null :
                <Grid imgs = {props.imgs}/>
            }
        </div>
    );
}

function mapStateToProps(store: AppState){
    return {
        imgs: store.gallery.imgs,
        loading: store.gallery.loading
    }
}

const mapDispatchToProps = {
    fetchImgs
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);