import './Skeleton.scss';

const Skeleton = ({loadingState, backgroundSize, height, margin = 0}) => {
  return (
    <div className='loading' 
         style={{display : loadingState ? 'none' : 'block', 
                 backGroundSize: backgroundSize, 
                 height: height,
                 margin: margin}}></div>
  )
}

export default Skeleton