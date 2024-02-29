import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ id, data, setData, onIsSplit }) {
  const [billVal, setBillVal] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [othersExpense, setOthersExpense] = useState("");
  const [billChoice, setBillChoice] = useState("You");

  function handleMyexp(e) {
    if (Number(e.target.value) <= billVal) {
      setMyExpense((ex) => (ex = e.target.value));
      if (e.target.value === "") {
        setOthersExpense((ex) => (ex = ""));
      } else {
        setOthersExpense(
          (ex) => (ex = String(Number(billVal) - Number(e.target.value)))
        );
      }
    }
  }

  function handleOtherexp(e) {
    if (Number(e.target.value) <= billVal) {
      setOthersExpense((ex) => (ex = e.target.value));
      if (e.target.value === "") {
        setMyExpense((ex) => (ex = ""));
      } else {
        setMyExpense(
          (ex) => (ex = String(Number(billVal) - Number(e.target.value)))
        );
      }
    }
  }

  function calcNewBalance() {
    let newBalance = 0;
    if (billChoice === "You") {
      newBalance = Number(othersExpense);
    } else {
      newBalance = -Number(myExpense);
    }
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].balance += newBalance;
      }
      newData.push(data[i]);
    }
    setData(newData);
    setMyExpense((v) => (v = ""));
    setOthersExpense((v) => (v = ""));
    setBillVal((v) => (v = ""));
    setBillChoice((v) => (v = "You"));
    onIsSplit(id);
  }

  function preventMinus(e) {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  }

  let name = "",
    i = 0;
  for (i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      name = data[i].name;
      break;
    }
  }
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {name} </h2>
      <label>💰Bill value</label>
      <input
        placeholder=""
        type="Number"
        value={billVal}
        onChange={(e) => setBillVal(e.target.value)}
        onKeyDown={(e) => preventMinus(e)}
      ></input>
      <label>💵Your Expense</label>
      <input
        disabled={billChoice !== "You" ? true : false}
        type="Number"
        placeholder=""
        value={myExpense}
        onKeyDown={(e) => preventMinus(e)}
        onChange={(e) => handleMyexp(e)}
      ></input>
      <label>💵{name}'s Expense</label>
      <input
        disabled={billChoice === "You" ? true : false}
        type="Number"
        placeholder=""
        value={othersExpense}
        onKeyDown={(e) => preventMinus(e)}
        onChange={(e) => handleOtherexp(e)}
      ></input>
      <label>🤑Who's paying the bill?</label>
      <select
        value={billChoice}
        onChange={(e) => setBillChoice(e.target.value)}
      >
        <option>You</option>
        <option>{name}</option>
      </select>
      <Button onClick={calcNewBalance}>Split Bill</Button>
    </form>
  );
}
