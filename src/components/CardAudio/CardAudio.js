import './CardAudio.css'
// import React from "react";

// function CardAudio() {
//    return (
//       <div className="chatAi-audio">
//          <audio className="chatAi-audio__recording" src="" controls> </audio>
//       </div>


//    )
// }

// export default CardAudio;

import React, { useEffect, useState } from 'react';
import playRut from "../../images/play-rut.svg"
const CardAudio = ({ url }) => {
   const [audioContext, setAudioContext] = useState(null);
   const [audioSource, setAudioSource] = useState(null);
   const [isPlaying, setIsPlaying] = useState(false);

   useEffect(() => {

      console.log(audioContext)
      // Создаем аудиоконтекст
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);

      // Создаем источник звука
      const source = context.createBufferSource();
      setAudioSource(source);

      // Загружаем аудио
      fetch(url)
         .then(response => response.arrayBuffer())
         .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
         .then(audioBuffer => {
            source.buffer = audioBuffer;
            source.connect(context.destination);
         });

      return () => {
         // Отключаем источник при размонтировании компонента
         source.disconnect();
         context.close();
      };
   }, [url]);

   const playAudio = () => {
      if (!isPlaying && audioSource) {
         audioSource.start();
         setIsPlaying(true);
      } else {
         audioSource.stop();
         setIsPlaying(false);
      }
   };

   // const stopAudio = () => {
   //    if (isPlaying && audioSource) {
   //       audioSource.stop();
   //       setIsPlaying(false);
   //    }
   // };

   return (
      <div className="chatAi-audio" >
         <button className="chatAi-audio__play" onClick={playAudio}></button>
         {/* <button onClick={stopAudio}>Stop</button> */}
         <img src={playRut} alt={'s'}/>
      </div>
   );
};

export default CardAudio;
