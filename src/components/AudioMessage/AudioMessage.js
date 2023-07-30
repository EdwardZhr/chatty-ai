import './AudioMessage.css'
import {useState, useRef, useEffect} from 'react'
import WaveSurfer from 'wavesurfer.js';

function AudioMessage({src}) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);

  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      height: 16,
      normalize: true,
      cursorWidth: 0,
      waveColor: 'rgba(255, 255, 255, .66)',
      progressColor: 'rgba(255, 255, 255, 1)',
      audioRate: 1,
      barWidth: 2,
      barRadius: 1,
      barGap: 4,
    });

    wavesurfer.current.load(src);

    // wavesurfer.current.on('audioprocess', (time) => {
    //     setCurrentTime(time);
    // });

    wavesurfer.current.on('finish', () => {
        setIsPlaying(prevCount => !prevCount)
  });

    return () => {
      wavesurfer.current.destroy()};
  }, [src]);

  const onClickCtrlBtn = () => {
    if (!isPlaying) {
        wavesurfer.current.play();
    } else {
        wavesurfer.current.pause();
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='audio-message'>
      <button className='audio-message__control-btn' onClick={onClickCtrlBtn}>
        <div className={`audio-message__control-icon ${isPlaying ? 'audio-message__control-icon_type_stop' : 'audio-message__control-icon_type_play'}`}></div>
      </button>
      <div className='audio-message__waveform-wrapper'>
        <div id="waveform" ref={waveformRef}/>
      </div>
    </div>
  )
}
  
export default AudioMessage;
