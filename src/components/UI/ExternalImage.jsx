import React, { useState } from 'react'
import preloader from '../../assets/preloader.gif';
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
       {/* <Skeleton loadingState={isReady} backgroundSize={'800px 500px'} height={'500px'}/> */}
       {isReady ? null : <Skeleton variant="rounded" style={{paddingTop: '140%', background: '#363f54'}} />}
    </>
  )
}

export default ExternalImage