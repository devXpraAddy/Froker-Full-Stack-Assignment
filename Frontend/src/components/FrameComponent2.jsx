import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.singleQuestionParent, className].join(" ")}>
      <div className={styles.singleQuestion}>
        <img
          className={styles.untitledDesign20240321t1Icon}
          loading="lazy"
          alt=""
          src="/untitled-design--20240321t154707-1-yxtlfhpng@2x.png"
        />
      </div>
      <div className={styles.stepFourContainer}>
        <Accordion className={styles.overlayshadow}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>Who can join Froshare platform?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Anyone eager to enhance their social media presence and income can
              join Froshare! Whether you are a creator aiming to amplify your
              influence and earnings, an affiliate partner seeking to expand
              your brand network and simplify link sharing, or simply interested
              in exploring affiliate marketing and collaborating with top
              brands.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow1}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>
              How can I check brands and commission rates available on Froshare?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Discover a world of options on Froker platform! Explore the Brands
              section in your profile to browse through a plethora of brands and
              their associated commissions. Do not wait – start collaborating
              and earning today! Dive into Froker app now!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow2}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>
              How can I track my commissions and when will I get paid?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              With Froshare, simply log into your dashboard to monitor
              commissions and analyze followers purchases. When you are ready,
              redeem earnings with a single click. Your earnings will be
              credited to your linked bank account within 2-3 business days
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow3}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>What if there is an issue with your order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Froker is a community of trusted brands and businesses. Our
              dedicated customer support team is here to swiftly resolve any
              concerns you may have. Promote with confidence, knowing we have
              got your back!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow4}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>
              Will I receive any brand collaboration opportunities?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, Froshare offers brand collaboration opportunities based on
              creators profiles and engagement metrics.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow5}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>
              I am eager to know if I will receive any sourcing opportunities
              and how it all works?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sourcing depends on the brand preferences and your profile. Find
              details in the "Details" section after selecting brand products
              from your dashboard. Remember, sourcing details are subject to
              each brands terms and conditions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.overlayshadow6}>
          <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
            <Typography>
              Will my Instagram account be permanently linked to Froshare?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your Instagram account remains linked to Froshare as long as you
              choose to utilize our services. You have the freedom to unlink it
              whenever you wish.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className={styles.overlayshadow7}>
          <div className={styles.heading3}>Still have questions?</div>
          <img className={styles.buttonIcon} alt="" src="/button-7.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
