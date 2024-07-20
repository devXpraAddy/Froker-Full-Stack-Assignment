import SignupCallout from "./SignupCallout";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <SignupCallout />
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
