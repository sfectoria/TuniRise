'use client';
import Link from 'next/link';
import { Button } from '../ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/videos/carte_visite.mp4',
    category: 'Media',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/videos/carte_visite2.mp4',
    category: 'Media',
    name: 'Solstice Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/flayer.png',
    category: 'Media',
    name: 'Lumina Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  // {
  //   image:  [
  //    '/work/1.png','/work/2.png','/work/3.png','/work/4.png', '/work/5.png','/work/6.png','/work/7.png'
  //   ],
  //   category: 'next js',
  //   name: 'Evolve Website',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
  //   link: '/',
  //   github: '/',
  // },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
];

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Heading from '../Heading';
const Work = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  return (
    <section className='relative lg:mb-48 mb-24 ' data-aos="fade-right">
    <div className='container mx-auto'>
      {/* text */}
     
      <div className="lg:mb-24 mx-2"><Heading tit1="LATEST PROJECT" tit2="LATEST PROJECT"/></div>

      
        {/* <Link href='/projects'>
          <Button className='text-white'>Tous les Projets</Button>
        </Link> */}
  
  
      {/* slider */}
      <div className=' mx-auto'>
        <Swiper
          className='xl:h-[670px] lg:h-[550px] md:h-[500px] sm:h-[490px] h-[500px]'
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {/* show only the first 4 projects for the slides */}
          {projectData.slice(0, 4).map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  </section>
  
  );
};

export default Work;
