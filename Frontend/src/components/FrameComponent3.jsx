import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.elevateYourParent}>
            <b className={styles.elevateYour}>Elevate your</b>
            <div className={styles.influenceParent}>
              <b className={styles.influence}>Influence</b>
              <div className={styles.svgWrapper}>
                <img
                  className={styles.svgIcon}
                  loading="lazy"
                  alt=""
                  src="/svg.svg"
                />
              </div>
              <b className={styles.connection}>Connection</b>
              <div className={styles.svgContainer}>
                <img className={styles.svgIcon1} alt="" src="/svg.svg" />
              </div>
              <b className={styles.earning}>Earning!!</b>
            </div>
          </div>
          <div className={styles.connectWithTopBrandsExpanParent}>
            <div
              className={styles.connectWithTop}
            >{`Connect with top brands, expand reach & earn big!`}</div>
            <div
              className={styles.simplifyPosting}
            >{`Simplify posting & sharing links with Froshare`}</div>
          </div>
          <Button
            className={styles.background}
            endIcon={<img width="32px" height="32px" src="/svg-2.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18.4",
              background: "#f76f32",
              borderRadius: "9999px",
              "&:hover": { background: "#f76f32" },
              width: 272,
              height: 64,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <img
        className={styles.group11712773402QfluimpngIcon}
        loading="lazy"
        alt=""
        src="/group-1171277340-2-qfluimpng@2x.png"
      />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
