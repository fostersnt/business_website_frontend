import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const styles = {
    logo: {
      fontSize: "32px",
      fontWeight: "bold",
      backgroundColor: "#fff",
      padding: "5px",
      border: "1px solid #ff5722",
      borderRadius: "30px"
      //   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      //   display: "inline-block",
    },
    dictum: {
      color: "#0d47a1", // deep blue
    },
    logic: {
      color: "#ff5722", // vibrant orange
    },
  };

  return (
    <Link to="/">
      <div style={styles.logo}>
        <span style={styles.dictum}>Dictum</span>
        <span style={styles.logic}>Logic</span>
      </div>
    </Link>
  );
};

export default Logo;
