import Image from 'next/image';
import classes from './page.module.css';
import { profiles } from '@/data/profiles';

export default function Page() {
  return (
    <div className={classes.browse}>
      <ul className={classes.profiles}>
        {profiles.map((profile, index) => (
          <li key={index}>
            <a href={`/profile/${index}`} className={classes.card}>
              <div className={classes.image}>
                <Image
                  src={`/images/${profile.image}`}
                  alt="profile image"
                  height={0}
                  width={0}
                  style={{ width: '100%', height: 'auto' }}
                  sizes={'300w'}
                />
              </div>
              <div className={classes.bio}>
                <p className={classes.name}>{profile.name}</p>
                <p className={classes.job}>{profile.job}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
