import React from "react";
import { Link } from "react-router-dom";
import '../styles/Logo.css';

const Logo = () => {
  // const styles = {
  //   logo: {
  //     fontSize: "32px",
  //     fontWeight: "bold",
  //     backgroundColor: "#fff",
  //     padding: "5px",
  //     border: "1px solid #ff5722",
  //     borderRadius: "30px"
  //   },
  //   dictum: {
  //     color: "#0d47a1",
  //   },
  //   logic: {
  //     color: "#ff5722",
  //   },
  // };

  // return (
  //   <Link to="/">
  //     <div style={styles.logo}>
  //       <span style={styles.dictum}>Dictum</span>
  //       <span style={styles.logic}>Logic</span>
  //     </div>
  //   </Link>
  // );

  return (
    <Link to="/">
      <div className="logo">
        <span className="dictum">Dictum</span>
        <span className="logic">Logic</span>
      </div>
    </Link>
  );
};

export default Logo;
