import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ContactInfo from "./ContactInfo";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <footer className={[styles.scanContainerParent, className].join(" ")}>
      <div className={styles.scanContainer}>
        <div className={styles.recentPosts}>
          <div className={styles.recentPostsInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.itemButtonGoToPreviousParent}>
                  <img
                    className={styles.itemButtonGoToPrevious}
                    loading="lazy"
                    alt=""
                    src="/item--button--go-to-previous-page.svg"
                  />
                  <div className={styles.itemButtonPage1}>
                    <div className={styles.paginationMarkers}>1</div>
                  </div>
                  <div className={styles.itemButtonGoToPage2}>
                    <div className={styles.div}>2</div>
                  </div>
                  <img
                    className={styles.itemButtonGoToNextPag}
                    loading="lazy"
                    alt=""
                    src="/item--button--go-to-next-page.svg"
                  />
                </div>
              </div>
              <div className={styles.border}>
                <img
                  className={styles.objectsLpey0bpngIcon}
                  loading="lazy"
                  alt=""
                  src="/objects-lpey0bpng@2x.png"
                />
                <div className={styles.borderInner}>
                  <div className={styles.frameGroup}>
                    <div className={styles.subscribeToOurNewsletterToWrapper}>
                      <div className={styles.subscribeToOurContainer}>
                        <span>
                          <p className={styles.subscribeToOur}>
                            Subscribe to our newsletter to get the latest
                          </p>
                          <p className={styles.updatesAndNews}>
                            updates and news
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className={styles.form}>
                      <TextField
                        className={styles.input}
                        placeholder="Enter your email"
                        variant="outlined"
                        sx={{
                          "& fieldset": { border: "none" },
                          "& .MuiInputBase-root": {
                            height: "54px",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            fontSize: "15.1px",
                          },
                          "& .MuiInputBase-input": { color: "#9ca3af" },
                        }}
                      />
                      <Button
                        className={styles.button}
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "15.1",
                          background: "#fe8849",
                          borderRadius: "0px 0px 0px 0px",
                          "&:hover": { background: "#fe8849" },
                          width: 227.6,
                          height: 54,
                        }}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paginationLinks}>
            <img
              className={styles.blackLogoFrokerrCopy10PwpIcon}
              loading="lazy"
              alt=""
              src="/blacklogofrokerrcopy10-pwpomgjpg1@2x.png"
            />
            <div className={styles.heading4QuicklinkParent}>
              <b className={styles.heading4}>Quicklink</b>
              <div className={styles.quickLinksList}>
                <ContactInfo />
                <div className={styles.copyrightContainer}>
                  <img
                    className={styles.arrowWxeel0jpgIcon}
                    alt=""
                    src="/arrow-wxeel0jpg-11@2x.png"
                  />
                  <div className={styles.linkAboutUsWrapper}>
                    <div className={styles.linkAbout}>About us</div>
                  </div>
                </div>
                <div className={styles.quicklinksIcons}>
                  <img
                    className={styles.arrowWxeel0jpgIcon1}
                    alt=""
                    src="/arrow-wxeel0jpg-21@2x.png"
                  />
                  <div className={styles.linkPrivacy}>Privacy policy</div>
                </div>
                <div className={styles.quicklinksIcons1}>
                  <img
                    className={styles.arrowWxeel0jpgIcon2}
                    alt=""
                    src="/arrow-wxeel0jpg-31@2x.png"
                  />
                  <div className={styles.privacyContainer}>
                    <div
                      className={styles.linkTerms}
                    >{`Terms & Conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heading4ContactsParent}>
              <b className={styles.heading41}>Contacts</b>
              <div className={styles.contactLinks}>
                <img
                  className={styles.linkSvg}
                  loading="lazy"
                  alt=""
                  src="/link--svg1.svg"
                />
                <div className={styles.whitefieldBengaluru560066}>
                  Whitefield, Bengaluru, 560066
                </div>
              </div>
              <div className={styles.contactLinks1}>
                <img
                  className={styles.linkSvg1}
                  alt=""
                  src="/link--svg-11.svg"
                />
                <div className={styles.supportfrokerin}>support@froker.in</div>
              </div>
              <div className={styles.socialLinksContainer}>
                <div className={styles.locationLinks}>
                  <img
                    className={styles.linkSvg2}
                    alt=""
                    src="/link--svg-21.svg"
                  />
                  <img
                    className={styles.linkSvg3}
                    alt=""
                    src="/link--svg-31.svg"
                  />
                  <img
                    className={styles.linkSvg4}
                    alt=""
                    src="/link--svg-41.svg"
                  />
                  <img
                    className={styles.linkSvg5}
                    alt=""
                    src="/link--svg-51.svg"
                  />
                  <img
                    className={styles.linkSvg6}
                    alt=""
                    src="/link--svg-61.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.quicklinksContainer}>
              <b className={styles.heading42}>Scan To Download</b>
              <img
                className={styles.froker1310Pb9ylnjpgIcon}
                loading="lazy"
                alt=""
                src="/froker1310-pb9ylnjpg1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.base3f5339217a654a16332757444Parent}>
        <img
          className={styles.base3f5339217a654a16332757444Icon}
          alt=""
          src="/base3f5339217a654a163327574449f303a4svg1.svg"
        />
        <div className={styles.arrozTechnologyAll}>
          © 2024 Arroz Technology. All rights reserved
        </div>
      </div>
    </footer>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
