import { addDoc, collection, doc } from "firebase/firestore";
import { usePostWishlistItem } from "../../firebase/service";
import "./AddForm.scss"
import { useForm } from 'react-hook-form';
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { useState } from "react";
const AddForm = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const onClickPopupOpen = () => {
    setIsPopupOpen(true)
  }

  const onClickPopupClose = () => {
    setIsPopupOpen(false)
  }

  const onSubmit = data => {
    data.date = new Date()
    console.log(data)
    const ref = collection(db,"wishlist")
	  addDoc(ref,data)
    onClickPopupOpen()

  }

  return (
    <div className="addForm__container">
      <div className="container">
        {isPopupOpen ? <div className="formPopup">
          <div className="container">
            <h1 className="formPopup__heading">Thank you for your request!</h1>
            <p className="formPopup__text">We will inform you as soon as the movie will be available.</p>
            <button className="formPopup__button"><Link onClick={()=> onClickPopupClose()} to='/'>Go to main page</Link></button>
          </div>
        </div> : null}
        <form onSubmit={handleSubmit(onSubmit)} className="addForm" id="addForm">
          <legend className="form__legend">Add your film to a wishlist</legend>
          <fieldset>
              <label className="form__label">Your email: </label>
            <div className="form__field form__email">
              <input className="form__input" id="email" type="text" placeholder="Email" {...register('email',{required: true, pattern: /^\S+@\S+$/  })}/>
              {errors.email && errors.email.type === "required" && <span>Can't be empty</span>}
            </div>
          </fieldset>
          <fieldset>
            <label>Movie/TV Series Info</label>
            <div className="form__field">
              <input className="form__input" id="title" type="text" placeholder="Title"{...register('title', {required: true, minLength: 3})}/>
              {errors.title && errors.title.type === "required" && <span>Can't be empty</span>}
            </div>
            <div className="form__field">
              <input className="form__input" id="year" type="text" placeholder="Year" {...register('year')}/>
            </div>
            <div className="form__field">
              <input className="form__input" id="category" type="text" placeholder="Category" {...register('category')}/>
            </div>
            <div className="form__field">
              <label className="form__label">Choose genre: </label>
              <select className="form__input" id="genre" type="text" {...register('genre')}>
                <option value="action" >action</option>
                <option value="fantasy">fantasy</option>
                <option value="drama">drama</option>
                <option value="cartoon">cartoon</option>
                <option value="comedy">comedy</option>
              </select>
            </div>
          </fieldset>
          <button className="form__submitButton" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddForm