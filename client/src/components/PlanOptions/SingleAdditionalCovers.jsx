import styles from "./AdditionalCovers.module.css";
import { useState } from "react";
export const SingleAdditionalCover = (props) => {
  const [selected, setSelected] = useState(false);

  const handleclick = () => {
    setSelected((props) => !props);
  };
  console.log(selected);

  return (
    <div className={styles.singleCover}>
      <div>{props.svg}</div>
      <div>
        <div>
          {" "}
          {props.heading} <span> ₹{props.price} </span>{" "}
        </div>
        <div> {props.body}</div>
      </div>
      <div>
        {" "}
        <button
          style={{
            color: selected ? "#E74D31" : "#4090d7",
            border: selected ? "1px solid #E74D31" : "1px solid #4090d7",
          }}
          onClick={handleclick}
        >
          {selected ? "Remove" : "Add"}
        </button>{" "}
      </div>
    </div>
  );
};
