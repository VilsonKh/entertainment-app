import "./Preloader.scss"
import preloader from '../../assets/preloader.gif'
const Preloader = () => {
  return (
    <div className='preloader__container'>
      <img src={preloader} alt="" />
    </div>
  )
}

export default Preloader