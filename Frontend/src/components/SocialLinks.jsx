import PropTypes from "prop-types";
import styles from "./SocialLinks.module.css";

const SocialLinks = ({ className = "" }) => {
  return (
    <section className={[styles.socialLinks, className].join(" ")}>
      <div className={styles.earnList}>
        <div className={styles.commissionStep}>
          <div className={styles.backgroundParent}>
            <div className={styles.background}>
              <div className={styles.stepFourNumber}>[ 04 ]</div>
            </div>
            <div className={styles.earnCommission}>Earn Commission</div>
            <div className={styles.stayInformedAboutContainer}>
              <p className={styles.stayInformedAbout}>
                Stay informed about your earnings and monitor
              </p>
              <p className={styles.performanceThroughComprehens}>
                performance through comprehensive analytical data.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.background1}>
          <div className={styles.appImages}>
            <div className={styles.stepIcons}>
              <img
                className={styles.ysg563pngIcon}
                alt=""
                src="/32-6382554-ysg563png@2x.png"
              />
              <img
                className={styles.v7ppsbpngIcon}
                alt=""
                src="/31-7728-v7ppsbpng@2x.png"
              />
              <img
                className={styles.rxhjampngIcon}
                alt=""
                src="/34-680492-rxhjampng@2x.png"
              />
            </div>
            <img
              className={styles.ipjqtipngIcon}
              loading="lazy"
              alt=""
              src="/33-1-ipjqtipng@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

export default SocialLinks;
