import styles from "./cardPayment.module.css";

export const SIdeDiv = ({ svg, text }) => {
  return (
    <div>
      <div>
        <div>{svg}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};
