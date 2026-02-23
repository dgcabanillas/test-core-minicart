import React from "react";
import { Button } from "@indigitalxp/ui-components/Button";

const Minicart: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <span style={{ fontSize: "2rem", fontWeight: "bold" }}>Minicart</span>
      <Button> Test Button </Button>
    </div>
  );
};

export default Minicart;
