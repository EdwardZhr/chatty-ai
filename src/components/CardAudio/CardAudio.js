import './CardAudio.css'
import mp3 from '../../Mp3/rington.mp3'
import play from "../../images/btn-audio.svg"



// import React, { useState, useRef, useEffect } from 'react';
// import WaveSurfer from 'wavesurfer.js';

// const Waveform = ({ url }) => {
//    const waveformRef = useRef(null);
//    const wavesurfer = useRef(null);


//    useEffect(() => {
//       wavesurfer.current = WaveSurfer.create({
//          container: waveformRef.current,
//          waveColor: 'violet',
//          progressColor: 'purple'
//       });

//       wavesurfer.current.load(url);

//       return () => wavesurfer.current.destroy();
//    }, [url]);

//    return <div id="waveform" ref={waveformRef} />;
// };

// const AudioPlayer = ({ url }) => {
//    const audioRef = useRef(null);
//    //
//    const waveformRef = useRef(null);
//    const wavesurfer = useRef(null);
//    //
//    const [isPlaying, setIsPlaying] = useState(false);
//    const [currentTime, setCurrentTime] = useState(0);
//    const [isMuted, setIsMuted] = useState(false);

//    useEffect(() => {
//       wavesurfer.current = WaveSurfer.create({
//          container: waveformRef.current,
//          waveColor: 'violet',
//          progressColor: 'purple'
//       });

//       wavesurfer.current.load(url);

//       return () => wavesurfer.current.destroy();
//    }, [url]);

//    const handlePlayPause = () => {
//       if (!isPlaying) {
//          audioRef.current.play();
//       } else {
//          audioRef.current.pause();
//       }
//       setIsPlaying(!isPlaying);
//    };

//    const handleTimeUpdate = () => {
//       setCurrentTime(audioRef.current.currentTime);
//    };



//    const handleMute = () => {
//       audioRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//    };

//    return (
//       <div>
//          <audio
//             ref={audioRef}
//             src={url}
//             onTimeUpdate={handleTimeUpdate}
//          />
//          <div id="waveform" ref={waveformRef} />
//          <button onClick={handlePlayPause}>
//             {isPlaying ? 'Pause' : 'Play'}
//          </button>
//          <button onClick={handleMute}>
//             {isMuted ? 'Unmute' : 'Mute'}
//          </button>
//          <div>Current Time: {currentTime.toFixed()} seconds</div>
//          {/* <Waveform url={url} /> */}
//       </div>
//    );
// };

// export default AudioPlayer;
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ url }) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [currentTime, setCurrentTime] = useState(0);
   const [isMuted, setIsMuted] = useState(false);

   const waveformRef = useRef(null);
   const wavesurfer = useRef(null);

   useEffect(() => {
      wavesurfer.current = WaveSurfer.create({
         container: waveformRef.current,
         waveColor: 'violet',
         progressColor: 'purple',
         audioRate: 1,
         cursorColor: 'navy',
         progressColor: 'purple',
         barWidth: 2
      });

      wavesurfer.current.load(url);

      wavesurfer.current.on('audioprocess', (time) => {
         setCurrentTime(time);
      });

      return () => wavesurfer.current.destroy();
   }, [url]);

   const handlePlayPause = () => {
      if (!isPlaying) {
         wavesurfer.current.play();
      } else {
         wavesurfer.current.pause();
      }
      setIsPlaying(!isPlaying);
   };

   const handleMute = () => {
      wavesurfer.current.setMute(!isMuted);
      setIsMuted(!isMuted);
   };

   return (
      <div className='chatAi-audio'>
         <div id="waveform" ref={waveformRef} />
         <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
         </button>
         <button onClick={handleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
         </button>
         <div>Current Time: {currentTime.toFixed(2)} seconds</div>
      </div>
   );
};

export default AudioPlayer;
