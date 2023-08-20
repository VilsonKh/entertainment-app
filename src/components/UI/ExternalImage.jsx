import React, { useState } from 'react'
import { Skeleton } from '@mui/material';

const ExternalImage = ({thumbnail, opacity=false}) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <img className={`movie-thumb${opacity ? ' opacity' : ''}`}
        style={{display : isReady ? 'block' : 'none'}}
        onLoad={() => setIsReady(true)}
        src={thumbnail} 
        alt="film cover" 
        />
       {isReady ? null : <Skeleton variant="rounded" style={{paddingTop: '140%', background: '#363f54'}} />}
    </>
  )
}

export default ExternalImage