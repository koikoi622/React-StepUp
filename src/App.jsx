import React, { useEffect, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export const App = () => {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);

  const onClickOpen = () => setOpen(!open);

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </>
  );
};
