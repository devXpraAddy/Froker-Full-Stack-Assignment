import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={[styles.letsSetYouUpParent, className].join(" ")}>
      <h1 className={styles.letsSetYou}>Let’s set you up !!</h1>
      <div className={styles.steps}>
        <div className={styles.stepByStep}>
          Step by step guide to get started
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
