import React from 'react';
import _ from 'lodash'
import lightGallery from 'lightgallery';

const ImageLightGallaryIntialize = () => {
    const destroyLightGallary = lightGallery(document.getElementById('lightgallery'), {
            speed: 500,
            closable:true
        });

        destroyLightGallary.ref();
}

const VideoLightGallaryIntialize = () => {
    lightGallery(document.getElementById('Videolightgallery'), {
        speed: 500,
        closable:true,
        plugins: [lgVideo],
        addClass:"video-gallary",
    });
    
}


export {ImageLightGallaryIntialize, VideoLightGallaryIntialize};