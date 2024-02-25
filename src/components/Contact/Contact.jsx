import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css.container}>
        <div>
          <p>
            <BsFillPersonFill />
            {name}
          </p>
          <p>
            <FaPhone />
            {number}
          </p>
        </div>
        <button type="button" className={id} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};
