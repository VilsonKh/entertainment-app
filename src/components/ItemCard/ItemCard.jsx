import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentCard, fetchCurrentItem } from '../../store/videosSlice';
import { useLocation } from 'react-router-dom';
import ExternalImage from '../UI/ExternalImage';

const ItemCard = () => {

  const dispatch = useDispatch();
  const location = useLocation()
  const data = useSelector(currentCard)
 
  console.log(data)

  useEffect(() => {
    dispatch(fetchCurrentItem(location.pathname.slice(1)))
  }, [dispatch])
  return (
    <div style={{width: "50%"}}>
      <h1>THIS IS ITEM CARD</h1>
      <ExternalImage thumbnail={data[0].thumbnail}/>
    </div>
  )
}

export default ItemCard