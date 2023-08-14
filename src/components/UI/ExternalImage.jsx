import React, { useState } from 'react'
import preloader from '../../assets/preloader.gif';

const ExternalImage = ({thumbnail}) => {
  const [url, setUrl] = useState(false);

  return (
    <>
      <img className="movie-thumb" 
        style={{display : url ? 'block' : 'none'}}
        onLoad={() => setUrl(true)}
        src={thumbnail} 
        alt="film cover" 
        />
        {!url && <img src={preloader} alt='' className='img-placeholder'/>}
      {}
    </>
  )
}

export default ExternalImage