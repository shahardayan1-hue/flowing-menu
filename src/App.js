import React from "react";
import { FlowingMenu } from "flowing-menu";
import "flowing-menu/dist/style.css";

export default function App() {
  const items = [
    { label: "Home", onClick: () => console.log("Home clicked") },
    { label: "About", onClick: () => console.log("About clicked") },
    { label: "Work", onClick: () => console.log("Work clicked") },
    { label: "Contact", onClick: () => console.log("Contact clicked") }
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <FlowingMenu items={items} />
    </div>
  );
}
