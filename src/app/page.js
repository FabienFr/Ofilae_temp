import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <video
      src="/Home.mp4"
      autoPlay
      loop
      muted
      playsInline
      className={styles.videoDesktop}
    />
    <video
      src="/Home-mobile.mp4"
      autoPlay
      loop
      muted
      playsInline
      className={styles.videoMobile}
    />
  </>
  );
}