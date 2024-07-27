import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {
  
    return (
      <div className={styles.BusinessList}>
      {props.businessList.map((onebusiness, index) => {
        return <Business key={index} business={onebusiness}/>
      })}
      </div>
    )
  };
  


export default BusinessList;
