import React from "react";
import styles from "./Products.module.css";
import Products from "./Products";

const Product = ( props ) => {
  return (
    <tr className={styles.tr}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price} $</td>
      <td>{props.left}</td>
      <td>
        <img src={props.image} alt="" />
      </td>
    </tr>
  );
};

export default Product;
