import styles from "./AdditionalCovers.module.css";

export const SingleAdditionalCover = (props) => {
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
        <button>{props.add ? "Remove" : "Add"}</button>{" "}
      </div>
    </div>
  );
};
