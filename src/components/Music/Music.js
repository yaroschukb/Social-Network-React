import React from 'react';
import style from './Music.module.css';


const Music = () => {
	return (
    <div className={style.content}>
      <figure className={style.audio}>
        <figcaption>Listen to the Korn:</figcaption>
        <audio controls src="../Music/mp3/6-korn-kiss_(zvukoff.ru).mp3" type="audio/mp3"></audio>
      </figure>
      <figure className={style.audio}>
        <figcaption>Listen to the Misfits:</figcaption>
        <audio controls src="./mp3/07 - Scream!.mp3" type="audio/mp3"></audio>   
      </figure>
    </div>
  )
};

export default Music; 