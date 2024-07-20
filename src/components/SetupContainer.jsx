import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./SetupContainer.module.css";

const SetupContainer = ({ className = "" }) => {
  return (
    <section className={[styles.setupContainer, className].join(" ")}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <img
            className={styles.group11712773253Esqqe8pngIcon}
            alt=""
            src="/group-1171277325-3-esqqe8png@2x.png"
          />
          <img
            className={styles.group1171277328QlzmqmpngIcon}
            loading="lazy"
            alt=""
            src="/group-1171277328-qlzmqmpng@2x.png"
          />
          <div className={styles.signupImagePairOne}>
            <img
              className={styles.group11712773272McjhltpngIcon}
              loading="lazy"
              alt=""
              src="/group-1171277327-2-mcjhltpng@2x.png"
            />
            <img
              className={styles.group11712773243Vlzmi7pngIcon}
              alt=""
              src="/group-1171277324-3-vlzmi7png@2x.png"
            />
          </div>
          <div className={styles.signupImagePairTwo}>
            <img
              className={styles.group1171277334W2tnjcpngIcon}
              loading="lazy"
              alt=""
              src="/group-1171277334-w2tnjcpng@2x.png"
            />
            <img
              className={styles.rightdownbagEbpyivpngIcon}
              alt=""
              src="/rightdownbag-ebpyivpng@2x.png"
            />
          </div>
          <img
            className={styles.group11712773231Mor1xwpngIcon}
            loading="lazy"
            alt=""
            src="/group-1171277323-1-mor1xwpng@2x.png"
          />
          <b className={styles.earnMoneyBy}>Earn Money by Sharing</b>
          <b className={styles.whatYouLove}>What You Love</b>
          <div className={styles.signUpFor}>
            Sign Up for Froshare Affiliate Now!
          </div>
          <Button
            className={styles.background}
            endIcon={<img width="32px" height="32px" src="/svg-4.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18.4",
              background: "#f76f32",
              borderRadius: "9999px",
              "&:hover": { background: "#f76f32" },
              width: 256,
              height: 57.6,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className={styles.stepOne}>
        <div className={styles.stepFour}>
          <div className={styles.setupSubtitleContainer}>
            <b className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </b>
          </div>
          <img
            className={styles.untitledDesign20240320t1Icon}
            loading="lazy"
            alt=""
            src="/untitled-design--20240320t121153-1-xussytpng@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

SetupContainer.propTypes = {
  className: PropTypes.string,
};

export default SetupContainer;
