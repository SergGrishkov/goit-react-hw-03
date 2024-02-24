import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
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
        <button type="button" className={id}>
          Delete
        </button>
      </div>
    </>
  );
};
