import React from 'react';
import _ from 'lodash'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayerDiv = (props) => {
    return (
        <AudioPlayer
            autoPlay            
            src={props?.data?.attributes?.Audio_Blog?.data?.attributes?.url}
        />
    )
}

export default AudioPlayerDiv;