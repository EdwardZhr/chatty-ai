import './AudioMessage.css'
import {useState} from 'react'

function AudioMessage({url}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickCtrlBtn = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='audio-message'>
      <button className='audio-message__control-btn' onClick={onClickCtrlBtn}>
        <div className={`audio-message__control-icon ${isPlaying ? 'audio-message__control-icon_type_stop' : 'audio-message__control-icon_type_play'}`}></div>
      </button>
    </div>
  )
}
  
export default AudioMessage;

// import React, { useState, useRef, useEffect } from 'react';
// import WaveSurfer from 'wavesurfer.js';

// const AudioPlayer = ({ url }) => {
//    const [isPlaying, setIsPlaying] = useState(false);
//    const [currentTime, setCurrentTime] = useState(0);
//    const [isMuted, setIsMuted] = useState(false);

//    const waveformRef = useRef(null);
//    const wavesurfer = useRef(null);

//    useEffect(() => {
//       wavesurfer.current = WaveSurfer.create({
//          container: waveformRef.current,
//          waveColor: 'violet',
//          progressColor: 'purple',
//          audioRate: 1,
//          cursorColor: 'navy',
//          progressColor: 'purple',
//          barWidth: 2
//       });

//       wavesurfer.current.load(url);

//       wavesurfer.current.on('audioprocess', (time) => {
//          setCurrentTime(time);
//       });

//       return () => wavesurfer.current.destroy();
//    }, [url]);

//    const handlePlayPause = () => {
//       if (!isPlaying) {
//          wavesurfer.current.play();
//       } else {
//          wavesurfer.current.pause();
//       }
//       setIsPlaying(!isPlaying);
//    };

//    const handleMute = () => {
//       wavesurfer.current.setMute(!isMuted);
//       setIsMuted(!isMuted);
//    };

//    return (
//       <div>
//          <div id="waveform" ref={waveformRef} />
//          <button onClick={handlePlayPause}>
//             {isPlaying ? 'Pause' : 'Play'}
//          </button>
//          <button onClick={handleMute}>
//             {isMuted ? 'Unmute' : 'Mute'}
//          </button>
//          <div>Current Time: {currentTime.toFixed(2)} seconds</div>
//       </div>
//    );
// };

// export default AudioPlayer;
