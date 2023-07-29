import './RecordingInput.css'

function RecordingInput({audioInputState, onStartRecording, onSendRecording, recordingTime}) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  return (
    <div className='recording-input'>
      {audioInputState === 'Initial' && <p className='recording-input__text'>Нажмите на микрофон, чтобы начать запись</p>}
      {audioInputState === 'Initial' && 
        <button className='recording-input__btn' onClick={onStartRecording}>
            <div className='recording-input__icon recording-input__icon_start'/>
        </button>}
      {(audioInputState === 'Recording' ||  audioInputState === 'Pause') && <p className='recording-input__timer'>{formatTime(recordingTime)} / 10:00</p>}
      {(audioInputState === 'Recording' ||  audioInputState === 'Pause')  && <div className='recording-input__track'></div>} 
      {(audioInputState === 'Recording' ||  audioInputState === 'Pause')  && 
        <button className='recording-input__btn recording-input__btn_hover_red'>
            <div className='recording-input__icon recording-input__icon_delete'/>
        </button>}
      {(audioInputState === 'Recording' ||  audioInputState === 'Pause')  && 
        <button className='recording-input__btn' onClick={onSendRecording}>
            <div className='recording-input__icon recording-input__icon_send'/>
        </button>}
    </div>
   )
};

export default RecordingInput;