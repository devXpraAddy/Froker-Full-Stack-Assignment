import PropTypes from "prop-types";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({
  className = "",
  linkSVG,
  linkSVG1,
  linkSVG2,
  linkSVG3,
  linkSVG4,
  linkSVG5,
  linkSVG6,
}) => {
  return (
    <div className={[styles.contactInfo, className].join(" ")}>
      <b className={styles.heading4}>Scan To Download</b>
      <img
        className={styles.froker1310Pb9ylnjpgIcon}
        loading="lazy"
        alt=""
        src="/froker1310-pb9ylnjpg@2x.png"
      />
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
  linkSVG: PropTypes.string,
  linkSVG1: PropTypes.string,
  linkSVG2: PropTypes.string,
  linkSVG3: PropTypes.string,
  linkSVG4: PropTypes.string,
  linkSVG5: PropTypes.string,
  linkSVG6: PropTypes.string,
};

export default ContactInfo;
