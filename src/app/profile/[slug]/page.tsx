'use client';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBriefcase,
  IconLocation,
  IconMap,
  IconScale,
  IconScaleOutline,
  IconWeight,
} from '@tabler/icons-react';
import classes from './page.module.css';
import Image from 'next/image';
import { profiles, Profile, getNextProfile } from '@/data/profiles';
import { useState } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  const profileIndex = Number(params.slug);
  const [profile, setProfile] = useState<Profile>(profiles[profileIndex]);

  function newProfile() {
    const randProfile = getNextProfile(profileIndex);

    window.location.replace(`/profile/${randProfile}`);
  }

  return !profile ? (
    <></>
  ) : (
    <div className={classes.profile}>
      <a
        onClick={() => newProfile()}
        className={`${classes.control} ${classes.reject}`}
        id="reject"
      >
        neigh
      </a>
      <section>
        <div className={classes.top}>
          <div className={classes.image}>
            <Image src={`/images/${profile.image}`} alt="profile image" fill sizes='600px' />
          </div>
          <div className={classes.links}>
            <a href="https://www.instagram.com" className={classes.link}>
              <IconBrandInstagram />
            </a>
            <a href="https://www.facebook.com" className={classes.link}>
              <IconBrandFacebook style={{ color: 'inherit' }} />
            </a>
          </div>
        </div>
        <div className={classes.details}>
          <span className={classes.name}>{profile.name}</span>
          <span className={classes.age}>{profile.age}</span>
        </div>
        <div className={classes.stats}>
          <div className={classes.job}>
            <IconBriefcase size={14} />
            <span>{profile.job}</span>
          </div>
          <div className={classes.weight}>
            <IconScaleOutline size={14} />
            <span>{profile.weight} lb</span>
          </div>
          <div className={classes.location}>
            <IconLocation size={14} />
            <span>{profile.location}</span>
          </div>
        </div>
        <div className={classes.bio}>
          <p>{profile.bio}</p>
        </div>
      </section>
      <a
        className={`${classes.control} ${classes.accept}`}
        href={`/chat/${profileIndex}`}
        id="accept"
      >
        whinny
      </a>
    </div>
  );
}
