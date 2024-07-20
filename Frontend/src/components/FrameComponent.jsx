import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.overlayWrapper, className].join(" ")}>
      <div className={styles.overlay}>
        <div className={styles.overlayInner}>
          <div className={styles.frameParent}>
            <div className={styles.rocketRw3kyppngWrapper}>
              <img
                className={styles.rocketRw3kyppngIcon}
                loading="lazy"
                alt=""
                src="/rocket-rw3kyppng@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.froshareWrapper}>
                  <b className={styles.froshare}>Froshare</b>
                </div>
                <div className={styles.theUltimateAffiliateMarketiParent}>
                  <div className={styles.theUltimateAffiliate}>
                    The Ultimate Affiliate Marketing Solution
                  </div>
                  <div className={styles.backgroundWrapper}>
                    <div className={styles.background}>
                      <div className={styles.wwwfroshareinyourNameWrapper}>
                        <div className={styles.wwwfroshareinyourName}>
                          <span>www.Froshare.in/</span>
                          <b className={styles.yourName}>Your_name</b>
                        </div>
                      </div>
                      <Button
                        className={styles.background1}
                        endIcon={
                          <img width="24px" height="24px" src="/svg-3.svg" />
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "14.9",
                          background:
                            "linear-gradient(90deg, #f97316, #f97316 50%, #ea580c)",
                          borderRadius: "9999px",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #f97316, #f97316 50%, #ea580c)",
                          },
                          height: 48,
                        }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectanglePxe9skpngWrapper}>
              <img
                className={styles.rectanglePxe9skpngIcon}
                loading="lazy"
                alt=""
                src="/rectangle-pxe9skpng@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.brandsUnlockedFor}>
            Brands Unlocked for You!
          </div>
          <img
            className={styles.brandIcon}
            loading="lazy"
            alt=""
            src="/frame-16-g4ycuepng@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
