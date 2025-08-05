import { BsCalendarDateFill, BsCardText } from "react-icons/bs";
import { IoPerson, IoPersonCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import style from "./ContactCard.module.css";
import { FaPhoneSquareAlt } from "react-icons/fa";

function ContactCard({ data , editHandler , deleteHandler }) {
  const { id, phone, name, lastName, email, job, birthday, gender } = data;
  return (
   
      <div className={style.card}>
        <div className={style.header}>
          <h3>contact ID : {id}</h3>
        </div>

        <div className={style.cardinfo}>
        
          <div className={`${style.info} ${style.name}`}>
            <IoPerson />
            <span>
              {name} {lastName}
            </span>
          </div>

           <div className={`${style.info} ${style.gender}`}>
            <IoPersonCircleOutline />
            <span>{gender}</span>
          </div>

          <div className={`${style.info} ${style.birthday}`}>
            <BsCalendarDateFill />
            <span>{birthday}</span>
          </div>

          <div className={`${style.info} ${style.phone}`}>
            <FaPhoneSquareAlt />
            <span>{phone}</span>
          </div>

         <div className={`${style.info} ${style.job}`}>
            <BsCardText />
            <span>{job}</span>
          </div>

          <div className={`${style.info} ${style.email}`} >
            <MdEmail />
            <span>{email}</span>
          </div>

         

          <div className={`${style.cardAction} ${style.cardbutton}`}>

          <button onClick={()=>editHandler(data)}  className={style.editButton}>Edit</button>
          <button onClick={()=>deleteHandler(id)} className={style.deleteButton}>Delete</button>
          </div>

        </div>
        
      </div>
 
  );
}

export default ContactCard;
