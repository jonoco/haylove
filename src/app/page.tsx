import classes from './page.module.css';
import Carousel from '@/components/Carousel/Carousel';

export default function Home() {
  return (
    <main className={classes.home}>
      <Carousel />

      <h1 className={classes.title}>Hay Love</h1>
      <p className={classes.subtitle}>Online dating by horses, for horses</p>
      <div className={classes.roamContainer}>
        <a href="/profile" className={classes.roam}>
          START ROAMING
        </a>
      </div>
    </main>
  );
}
