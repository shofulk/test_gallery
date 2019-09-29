import * as React from 'react';
import classes from './ImageItem.module.css';

interface ImageItemProps {
    url: string
}

export default (props: ImageItemProps) => {

    return (
        <div className={classes.ImageItem}>
            <img src={props.url}/>
        </div>
    );

}