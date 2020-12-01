import React from 'react';
import ss from './Music.module.css';


const Music =()=> {
	return (
  
  <div className={ss.content}>
    	    

        <figure className={ss.audio}>
          <figcaption>Listen to the Korn:</figcaption>
          <audio controls src="../Music/mp3/6-korn-kiss_(zvukoff.ru).mp3" type="audio/mp3"></audio>
       </figure>
    	
      
        <figure className={ss.audio}>
          <figcaption>Listen to the Misfits:</figcaption>
            <audio controls src="./mp3/07 - Scream!.mp3" type="audio/mp3"></audio>   
        </figure>
      
  </div>
   
  );
}



export default Music; 