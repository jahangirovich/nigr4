import {useState} from 'react'
import styles from "../../styles/Home.module.css";
import { withNamespaces } from "react-i18next";
import { FiCodesandbox, FiFileText } from "react-icons/fi";

const FileComponent = ({ t, items }) => {

  return (
    <div className={styles.divStyle}>
          {
            items.map((item) => (
              <a href={item.url} target="_blank">
                <div className={styles.eduProgramButton}>
                  <div>
                    <FiFileText size={30} />
                  </div>
                  <span>{item.name}</span>
                </div>
              </a>
            ))
          }
          
        {/* <embed src="https://drive.google.com/file/d/1xy9-7zioPlWpMBzN9CX3ceWMPU6Ycqnd/preview" type="application/pdf" className={styles.embedStyle} />

        <embed src="https://drive.google.com/file/d/1qRn1pgOUwGG_aUGAxLo4F4GK5-116SOL/preview" type="application/pdf" className={styles.embedStyle} />

        <embed src="https://drive.google.com/file/d/1VeQ8vh_Pzl-sl6TJ3NPiG_M_AeZBRhLy/preview" type="application/pdf" className={styles.embedStyle} /> */}
    </div>
  );
};

export default withNamespaces()(FileComponent);
