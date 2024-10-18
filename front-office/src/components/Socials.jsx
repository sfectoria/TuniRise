'use client';

import {
  RiXingFill,         // Import the X icon for Twitter
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';
import { RiTwitterXLine } from "react-icons/ri";

import Link from 'next/link';

const icons = [
  {
    path: 'https://twitter.com/your_handle', // Update this to your actual Twitter link
    name: <RiTwitterXLine />,
  },
  {
    path: 'https://linkedin.com/in/your_profile', // Update to your LinkedIn link
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/your_profile', // Update to your GitHub link
    name: <RiGithubFill />,
  },
  {
    path: 'https://facebook.com/your_profile', // Update to your Facebook link
    name: <RiFacebookFill />,
  },
  {
    path: 'https://instagram.com/your_profile', // Update to your Instagram link
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
