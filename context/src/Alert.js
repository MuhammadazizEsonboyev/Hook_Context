import React, { useContext } from "react";
import { AlertContext } from "./App";

export default function Alert() {
    const alert = useContext(AlertContext);

    if(!alert) return null;

  return (
    <div style={{ background: "red", padding: "20px", margin: "12px" }}>
      <p style={{ color: "white", fontSize: "18px" }}>
        This is messages very important
      </p>
    </div>
  );
}
