import styles from './index.module.css';
import { Video } from '../components/Video';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Video
        style={{
          position: 'fixed',
          top: '50%',
          right: '50%',
          transform: 'translate(50%,-50%)',
        }}
        path="video/main.mp4"
      />
    </div>
  );
}

export default Index;
