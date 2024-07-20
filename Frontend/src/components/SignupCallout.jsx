import FrameComponent2 from "./FrameComponent2";
import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";
import styles from "./SignupCallout.module.css";

const SignupCallout = ({ className = "" }) => {
  return (
    <div className={[styles.signupCallout, className].join(" ")}>
      <FrameComponent2 />
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <img
            className={styles.blackLogoFrokerrCopy10PwpIcon}
            loading="lazy"
            alt=""
            src="/blacklogofrokerrcopy10-pwpomgjpg@2x.png"
          />
          <div className={styles.questionContent}>
            <b className={styles.heading4}>Quicklink</b>
            <div className={styles.quickLinks}>
              <div className={styles.download}>
                <img
                  className={styles.arrowWxeel0jpgIcon}
                  alt=""
                  src="/arrow-wxeel0jpg@2x.png"
                />
                <a className={styles.home}>Home</a>
              </div>
              <div className={styles.quickLinkItems}>
                <img
                  className={styles.arrowWxeel0jpgIcon1}
                  alt=""
                  src="/arrow-wxeel0jpg-1@2x.png"
                />
                <a className={styles.linkAbout}>About us</a>
              </div>
              <div className={styles.quickLinkItems1}>
                <img
                  className={styles.arrowWxeel0jpgIcon2}
                  alt=""
                  src="/arrow-wxeel0jpg-2@2x.png"
                />
                <a className={styles.linkPrivacy}>Privacy policy</a>
              </div>
              <div className={styles.quickLinkItems2}>
                <img
                  className={styles.arrowWxeel0jpgIcon3}
                  alt=""
                  src="/arrow-wxeel0jpg-3@2x.png"
                />
                <a className={styles.linkTerms}>{`Terms & Conditions`}</a>
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <b className={styles.heading41}>Contacts</b>
            <div className={styles.contactItems}>
              <img className={styles.linkSvg} alt="" src="/link--svg.svg" />
              <div className={styles.whitefieldBengaluru560066}>
                Whitefield, Bengaluru, 560066
              </div>
            </div>
            <div className={styles.contactDetails}>
              <img className={styles.linkSvg1} alt="" src="/link--svg-1.svg" />
              <div className={styles.supportfrokerin}>support@froker.in</div>
            </div>
            <div className={styles.stepFourContent}>
              <div className={styles.contactDetails1}>
                <img
                  className={styles.linkSvg2}
                  alt=""
                  src="/link--svg-2.svg"
                />
                <img
                  className={styles.linkSvg3}
                  alt=""
                  src="/link--svg-3.svg"
                />
                <img
                  className={styles.linkSvg4}
                  alt=""
                  src="/link--svg-4.svg"
                />
                <img
                  className={styles.linkSvg5}
                  alt=""
                  src="/link--svg-5.svg"
                />
                <img
                  className={styles.linkSvg6}
                  alt=""
                  src="/link--svg-6.svg"
                />
              </div>
            </div>
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

SignupCallout.propTypes = {
  className: PropTypes.string,
};

export default SignupCallout;
