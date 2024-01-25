import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/profile/sitting-on-stairs.jpg';
import porfolioImage1 from '../images/portfolio/pygame-level-editor.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/dontavious.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile/sitting-on-stairs.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ryan McWeeny`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a San Diego based student of <strong className="text-stone-100">Computer science</strong>, currently studying
        at <strong className="text-stone-100">Del Norte High School</strong> 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me making games with thew <strong className="text-stone-100">Godot Engine</strong>,
        playing my <strong className="text-stone-100">Trumpet</strong>, or exploring the beautiful landscape of {' '}
        <strong className="text-stone-100">San Diego</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a high school student currently applying to several colleges for computer science. I have the most experience in tech from game development, using Pygame and the Godot Engine to make 2D video games. However, I am also well versed in Java and WpiLib from when I used them in my high school robotics team.`,
  aboutItems: [
    {label: 'Location', text: 'San Diego, CA', Icon: MapIcon},
    {label: 'Age', text: '17', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Trumpet, ', Icon: SparklesIcon},
    {label: 'Study', text: 'Del Norte High School', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'unemployed', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'svelte',
        level: 9,
      },
      {
        name: 'Tailwind',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Spring Boot',
        level: 4,
      },
      {
        name: 'SQLite',
        level: 6,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Pygame',
        level: 9,
      },
      {
        name: 'Godot',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Pygame Level editor',
    description: 'A 2D level editor that saves and load 2D maps using csv files',
    url: 'https://github.com/Ryanrob327/Pygame-level-editor.git',
    image: porfolioImage1,
  },
  {
    title: 'Classroom Jukebox',
    description: 'A tool for teachers to play music requested by the class',
    url: 'https://github.com/aidenhuynh/cj_frontend.git',
    image: porfolioImage2,
  },
  {
    title: 'Dontavious',
    description: 'Dating website made as a joke',
    url: 'https://dontavious.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'Del Norte High School',
    title: 'High School Diploma',
    content: <p>description</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Febuary 2023',
    location: 'Team Optix',
    title: 'Junior software engineer',
    content: (
      <p>
        description
      </p>
    ),
  },
  {
    date: 'March 2020 - Present',
    location: 'Game development',
    title: 'Solo Indie developer',
    content: (
      <p>
        description
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ryan McWeeny',
      text: 'Wow!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Description',
  items: [
    {
      type: ContactType.Email,
      text: 'ryanrob327@gmail.com',
      href: 'mailto:ryanrob327@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Diego CA, United States',
      href: 'https://www.google.com/maps/place/San+Diego+County,+CA/@33.0163463,-117.5055436,9z/data=!3m1!4b1!4m6!3m5!1s0x80dbeb3023ff601d:0x350dfd2beb800728!8m2!3d33.0933809!4d-116.6081653!16zL20vMGwycmo?authuser=0&entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@ryan_mcweeny',
      href: 'https://www.instagram.com/ryan_mcweeny/',
    },
    {
      type: ContactType.Github,
      text: 'Ryanrob327',
      href: 'https://github.com/Ryanrob327',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
];
