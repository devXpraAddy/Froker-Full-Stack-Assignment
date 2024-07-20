import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import BrandCollaboration from "../components/BrandCollaboration";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import SocialLinks from "../components/SocialLinks";
import SetupContainer from "../components/SetupContainer";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onNavClick = useCallback(() => {
    navigate("/blog-page");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <img
        className={styles.frame1171277305PquagqjpgIcon}
        alt=""
        src="/frame-1171277305-pquagqjpg@2x.png"
      />
      <header className={styles.nav} onClick={onNavClick}>
        <img
          className={styles.linkImage}
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
        <nav className={styles.navInner}>
          <nav className={styles.itemLinkHomeHomeParent}>
            <a className={styles.itemLink}>Home</a>
            <a className={styles.itemLink1}>Blogs</a>
            <a className={styles.itemLink2}>Discover Froker</a>
          </nav>
        </nav>
      </header>
      <FrameComponent3 />
      <section className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          <div className={styles.benefitsOfUsingFroshareWrapper}>
            <b className={styles.benefitsOfUsing}>Benefits of Using Froshare</b>
          </div>
          <div className={styles.effortlessAffiliateMarketingWrapper}>
            <div className={styles.effortlessAffiliateMarketing}>
              Effortless Affiliate Marketing!!
            </div>
          </div>
          <img
            className={styles.wpvz3lpngIcon}
            loading="lazy"
            alt=""
            src="/35-1-wpvz3lpng@2x.png"
          />
        </div>
      </section>
      <section className={styles.fAQHeader}>
        <div className={styles.itemLinks}>
          <FrameComponent1 />
          <div className={styles.brandCollaboration}>
            <div className={styles.waitWeHaveContainer}>
              <span>Wait, we have</span>
              <span className={styles.moreToOffer}> more to offer!!</span>
            </div>
          </div>
          <BrandCollaboration />
        </div>
      </section>
      <FrameComponent />
      <section className={styles.homePageInner}>
        <FrameComponent4 />
      </section>
      <section className={styles.questionItem}>
        <div className={styles.frameParent}>
          <div className={styles.backgroundParent}>
            <div className={styles.background}>
              <div className={styles.stepOneNumber}>[ 01 ]</div>
            </div>
            <div className={styles.signUpOn}>Sign Up on Froker app</div>
            <div className={styles.signUpUsingContainer}>
              <p className={styles.signUpUsing}>
                Sign Up using your contact number and personalize
              </p>
              <p className={styles.yourProfileFor}>
                your profile for a tailored Froker experience
              </p>
            </div>
          </div>
          <div className={styles.setupSteps}>
            <div className={styles.background1}>
              <div className={styles.stepTwoNumber}>[ 02 ]</div>
            </div>
            <div className={styles.setUpYour}>Set Up Your Store</div>
            <div className={styles.clickOnCheckContainer}>
              <p className={styles.clickOnCheck}>
                Click on "Check out Now" on home screen, select
              </p>
              <p className={styles.yourCategoryAnd}>
                your category and preferred brands to customize your
              </p>
              <p className={styles.store}>store.</p>
            </div>
          </div>
          <div className={styles.stepTwo}>
            <div className={styles.background2}>
              <div className={styles.stepThreeNumber}>[ 03 ]</div>
            </div>
            <div className={styles.tagShare}>{`Tag & Share Product Links`}</div>
            <div className={styles.tagProductsSeamlesslyContainer}>
              <p className={styles.tagProductsSeamlessly}>
                Tag products seamlessly and share product links with
              </p>
              <p className={styles.yourFollowersEffortlessly}>
                your followers effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SocialLinks />
      <SetupContainer />
      <Footer />
      <footer className={styles.copyright}>
        <img
          className={styles.base3f5339217a654a16332757444Icon}
          loading="lazy"
          alt=""
          src="/base3f5339217a654a163327574449f303a4svg.svg"
        />
        <div className={styles.arrozTechnologyAll}>
          © 2024 Arroz Technology. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
