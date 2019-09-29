import * as React from 'react';
import classes from './Grid.module.css';
import ImageModel from '../../entities/ImageModel.model';
import ImageItem from '../ImageItem/ImageItem';

interface GridProps{
    imgs: ImageModel[]
}

export default (props: GridProps) => {

    console.log(props);

    return (
        <div className = {classes.Grid}>
            {props.imgs.map((item, key) => {
                return (<ImageItem url={item.urls.small} key={key}/>)
            })}
        </div>
    );

}