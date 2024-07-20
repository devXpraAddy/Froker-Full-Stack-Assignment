import Footer from "./Footer1";
import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <section className={[styles.footerContent, className].join(" ")}>
      <div className={styles.recentPostsParent}>
        <div className={styles.recentPosts}>Recent Posts</div>
        <div className={styles.recentPostsContainer}>
          <Footer />
        </div>
      </div>
    </section>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
