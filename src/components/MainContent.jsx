import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.mainContent, className].join(" ")}>
      <div className={styles.container} onClick={onContainerClick}>
        <img
          className={styles.linkImage}
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
        <nav className={styles.containerInner}>
          <nav className={styles.itemLinkHomeHomeParent}>
            <a className={styles.itemLink}>Home</a>
            <a className={styles.itemLink1}>Blogs</a>
            <a className={styles.itemLink2}>Discover Froker</a>
          </nav>
        </nav>
      </div>
    </header>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
