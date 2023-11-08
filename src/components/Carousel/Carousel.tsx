'use client';

import Image from 'next/image';
import classes from './Carousel.module.css';
import bg_00 from 'public/images/bg_00.jpg';
import bg_01 from 'public/images/bg_01.jpg';
import bg_02 from 'public/images/bg_02.jpg';
import bg_03 from 'public/images/bg_03.jpg';
import { useEffect, useState } from 'react';

const images = [bg_00, bg_01, bg_02, bg_03];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    function nextImage() {
      setCurrentImage((ci) => (ci + 1 >= images.length ? 0 : ci + 1));
    }

    const timer = setInterval(nextImage, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={classes.carousel}>
      <div className={classes.images}>
        {images.map((img, i) => (
          <Image
            key={i}
            className={classes.image}
            style={{ opacity: currentImage === i ? 1 : 0 }}
            src={img}
            alt="horse"
            fill
          />
        ))}
      </div>
    </div>
  );
}
