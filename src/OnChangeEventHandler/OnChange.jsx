import React from "react";
import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("");
  const [quantity, setNumber] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Bkash");

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const quantityHandler = (event) => {
    setNumber(event.target.value);
  };

  const commentHandler = (event) => {
    setComment(event.target.value);
  };

  const paymentHandler = (event) => {
    setPayment(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={inputHandler} />
      <p>Text: {name}</p>
      <input type="number" value={quantity} onChange={quantityHandler} />
      <p>Quantity: {quantity}</p>
      <textarea
        name=""
        id=""
        placeholder="Please write something"
        onChange={commentHandler}
        value={comment}
      ></textarea>
      <p>Comment: {comment}</p> <br />
      <p>Select a payment method:</p>
      <select name="" id="" value={payment} onChange={paymentHandler}>
        <option value="Bkash">Bkash</option>
        <option value="Nagad">Nagad</option>
        <option value="Nexus">NexusPay</option>
      </select>
      <p>Payment method: {payment}</p>
    </div>
  );
}

export default OnChange;
