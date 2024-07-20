import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.questionContainerWrapper, className].join(" ")}>
      <div className={styles.questionContainer}>
        <div className={styles.untitledDesign20240320t1Parent}>
          <img
            className={styles.untitledDesign20240320t1Icon}
            loading="lazy"
            alt=""
            src="/untitled-design--20240320t182856-1-bvfuoapng@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.unlockYourInfluencerPotentiParent}>
              <b className={styles.unlockYourInfluencer}>
                Unlock Your Influencer Potential!
              </b>
              <div className={styles.getAQuick}>
                Get a Quick Snapshot of Your Earning Potential.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backgroundbordershadowWrapper}>
          <div className={styles.backgroundbordershadow}>
            <div className={styles.followersPosts}>
              <div className={styles.iHave150kContainer}>
                <span>{`I have `}</span>
                <span className={styles.kFollowers}>150k Followers</span>
                <span> on Instagram</span>
              </div>
              <div className={styles.overlayBackground}>
                <div className={styles.overlayshadow}>
                  <div className={styles.gradient} />
                </div>
                <div className={styles.backgroundshadow}>
                  <div className={styles.k}>150k</div>
                </div>
              </div>
            </div>
            <div className={styles.followerInput}>
              <div className={styles.iTypicallyShareContainer}>
                <span className={styles.iTypicallyShareAround25Po}>
                  <span>I typically share around</span>
                  <span className={styles.posts}> 25 Posts</span>
                  <span className={styles.onInstagram}> on instagram</span>
                </span>
                <span className={styles.perMonth}> (Per Month)</span>
              </div>
              <div className={styles.shadowContainer}>
                <div className={styles.overlayshadow1}>
                  <div className={styles.gradient1} />
                </div>
                <div className={styles.backgroundshadow1}>
                  <div className={styles.youjaPerfumePlaceholder}>25</div>
                </div>
              </div>
            </div>
            <div className={styles.followerInput1}>
              <div className={styles.youHaveTheContainer}>
                <span>{`You have the potential to `}</span>
                <b className={styles.earn}>earn</b>
                <span>{` an additional `}</span>
                <b className={styles.k1}>₹47k</b>
                <span> !</span>
              </div>
              <div className={styles.basedOnEstimates}>
                *Based on estimates that 1% to 5% of your followers make direct
                purchases from your store.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
