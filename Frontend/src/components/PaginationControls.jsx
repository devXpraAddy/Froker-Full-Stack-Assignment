import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./PaginationControls.module.css";

const PaginationControls = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/blog-1");
  }, [navigate]);

  return (
    <section className={[styles.paginationControls, className].join(" ")}>
      <div className={styles.menuItems}>
        <div className={styles.sidebarContentWrapper}>
          <div className={styles.sidebarContent}>
            <div className={styles.frokerBlogWrapper}>
              <h2 className={styles.frokerBlog}>
                <span className={styles.frokerBlogTxtContainer}>
                  <span>{`FROKER `}</span>
                  <span className={styles.blog}>BLOG</span>
                </span>
              </h2>
            </div>
            <div className={styles.articlesCoveringTheContainer}>
              <p className={styles.articlesCoveringThe}>
                Articles covering the most recent
              </p>
              <p className={styles.updatesAndAdvancements}>
                updates and advancements
              </p>
            </div>
          </div>
        </div>
        <div className={styles.linkParent}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <a className={styles.blog5creatorWpwvkipng}>
              <img
                className={styles.blog5creatorWpwvkipngIcon}
                alt=""
                loading="lazy"
                src="/blog5creator-wpwvkipng@3x.png"
              />
            </a>
            <div className={styles.frameParent}>
              <div className={styles.byVarshita9Feb2024Wrapper}>
                <div className={styles.byVarshita}>
                  by Varshita - 9 Feb 2024
                </div>
              </div>
              <div className={styles.titleMasteringTheArtOfCoParent}>
                <div className={styles.titleMasteringThe}>
                  Title: Mastering the Art of Co...
                </div>
                <div className={styles.introductionWelcomeTo}>
                  Introduction: Welcome to the dynamic world of content
                  creation, where creativity...
                </div>
              </div>
              <div className={styles.readMore}>Read More...</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.cc5Cye3u1pngParent}>
              <img
                className={styles.cc5Cye3u1pngIcon}
                loading="lazy"
                alt=""
                src="/cc5-cye3u1png@2x.png"
              />
              <img
                className={styles.f30i30Zzcco6pngIcon}
                loading="lazy"
                alt=""
                src="/f30i30-zzcco6png@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.secondBlogPostTitleContainParent}>
                  <div className={styles.secondBlogPostTitleContain}>
                    <div className={styles.byVarshita1}>
                      by Varshita - 3 March 2024
                    </div>
                  </div>
                  <div className={styles.secondPostDate}>
                    <div className={styles.whatIsContent}>
                      What Is Content Creation, Anyw...
                    </div>
                    <div className={styles.soYouveHeardContainer}>
                      <p className={styles.soYouveHeard}>
                        So, you've heard the buzz about content
                      </p>
                      <p className={styles.creation}>creation. ...</p>
                    </div>
                  </div>
                  <div className={styles.readMore1}>Read More...</div>
                </div>
                <div className={styles.byVarshitha3March2024Parent}>
                  <div className={styles.byVarshitha}>
                    by Varshitha - 3 March 2024
                  </div>
                  <div className={styles.thirdPostContent}>
                    <div className={styles.forbes30Under}>
                      Forbes 30 Under 30 India: Cele...
                    </div>
                    <div
                      className={styles.unconventionalGeniusesFearlContainer}
                    >
                      <p className={styles.unconventionalGeniusesFearl}>
                        Unconventional Geniuses, Fearless
                      </p>
                      <p className={styles.entrepreneursA}>
                        Entrepreneurs, a...
                      </p>
                    </div>
                    <div className={styles.readMore2}>Read More...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PaginationControls.propTypes = {
  className: PropTypes.string,
};

export default PaginationControls;
