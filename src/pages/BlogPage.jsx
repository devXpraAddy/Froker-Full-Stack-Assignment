import MainContent from "../components/MainContent";
import PaginationControls from "../components/PaginationControls";
import FooterContent from "../components/FooterContent";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <MainContent />
      <main className={styles.paginationControlsParent}>
        <PaginationControls />
        <FooterContent />
        <FrameComponent5 />
      </main>
    </div>
  );
};

export default BlogPage;
