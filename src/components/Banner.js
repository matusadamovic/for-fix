import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-8l text-transparent bg-clip-text bg-gradient-to-r 
            from-red-200 via-red-300 to-yellow-200'>Nájdite </span> si svoje vysnene byvanie
          </h1>
          <p className='max-w-[480px] mb-8'>
          Sme realitná kancelária, ktorá ponúka komplexné služby v oblasti realít,
          t.j. sprostredkovanie predaja, kúpy alebo prenájmu nehnuteľností:
          bytov, rodinných domov, chát, nebytových priestorov, komerčných objektov, pozemkov a pod. 
          v Bratislave a blízkom okolí.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
