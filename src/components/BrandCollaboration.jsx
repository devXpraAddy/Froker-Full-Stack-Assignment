import PropTypes from "prop-types";
import styles from "./BrandCollaboration.module.css";

const BrandCollaboration = ({ className = "" }) => {
  return (
    <div className={[styles.brandCollaboration, className].join(" ")}>
      <div className={styles.brandCollaborationInner}>
        <div className={styles.group1171277259F5u0nepngParent}>
          <img
            className={styles.group1171277259F5u0nepngIcon}
            loading="lazy"
            alt=""
            src="/group-1171277259-f5u0nepng@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.brandWrapper}>
                <div className={styles.brand}>Brand</div>
              </div>
              <div className={styles.collaboration}>Collaboration</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.brandCollaborationChild}>
        <div className={styles.group1171277254Gh3zdxpngParent}>
          <img
            className={styles.group1171277254Gh3zdxpngIcon}
            loading="lazy"
            alt=""
            src="/group-1171277254-gh3zdxpng@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.creatorsWrapper}>
                <div className={styles.creators}>Creators</div>
              </div>
              <div className={styles.community}>Community</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.group1171277253Siji10pngParent}>
          <img
            className={styles.group1171277253Siji10pngIcon}
            loading="lazy"
            alt=""
            src="/group-1171277253-siji10png@2x.png"
          />
          <div className={styles.creatorCommunity}>
            <div className={styles.frameParent1}>
              <div className={styles.monetizeWrapper}>
                <div className={styles.monetize}>Monetize</div>
              </div>
              <div className={styles.yourContent}>Your Content</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.group11712772601Ds7z16pngParent}>
        <img
          className={styles.group11712772601Ds7z16pngIcon}
          loading="lazy"
          alt=""
          src="/group-1171277260-1-ds7z16png@2x.png"
        />
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <div className={styles.automateWrapper}>
              <div className={styles.automate}>Automate</div>
            </div>
            <div className={styles.contentPromotion}>Content Promotion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandCollaboration.propTypes = {
  className: PropTypes.string,
};

export default BrandCollaboration;
