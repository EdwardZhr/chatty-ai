import './TextMessage.css'

function TextMessage({text}) {
  return (
    <div className='text-message'>
      <div className='text-message__avatar'>
          <div className='text-message__logo'/>
      </div>
      <div className='text-message__container' >
          <p className='text-message__header' >Chatty AI</p>
          <p className='text-message__text'>{text}</p>
      </div>

    </div>
  )
}

export default TextMessage;