import React, { useState } from "react";
import './Caculator.css'
import CaculatorKeyPad from "./CaculatorKeyPad";
import NewResult from "./NewResult";
export default function SimpleCaculator() {
  const [result, setResult] = useState<string>('');

  return (
    <div className="container" >
      <NewResult newResult={result} />
      <CaculatorKeyPad setResult={setResult} />
    </div>
  );
};