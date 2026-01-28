import React from 'react'
import "./index.css"
export default function CustomButton({type}) {
  return (
    <button className={type==="PRIMARY" ? "primary" : "outline"}>
        Custom Button{" "}
     </button>
  );
}
