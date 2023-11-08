import Image from 'next/image';
import classes from './Header.module.css';

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Image src="/images/horses_logo.png" width={250} height={80} alt="logo" priority />
      </div>
      <div className={classes.menu}>
        <a href="/">Home</a>
        <a href="/profile">Roam</a>
        <a href="/browse">Profiles</a>
        <a href="/chat">Chat</a>
        <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}
