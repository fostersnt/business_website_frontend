import React from "react";

const Logo = () => {
  const styles = {
    logo: {
      fontSize: "32px",
      fontWeight: "bold",
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
    <div style={styles.logo}>
      <span style={styles.dictum}>Dictum</span>
      <span style={styles.logic}>Logic</span>
    </div>
  );
};

export default Logo;
