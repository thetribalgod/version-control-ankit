import React from 'react';
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

// Example array of repositories
const repos = [
  {
    name: 'hackrab',
    url: 'https://github.com/burakorkmez/hackrab',
    stars: 167,
    forks: 25,
    description: 'Description for hackrab',
    releaseDate: 'Jan 1, 2021',
    languageIcons: ['/javascript.svg', '/python.svg'],
  },
  {
    name: 'hackchat',
    url: 'https://github.com/burakorkmez/hackchat',
    stars: 100,
    forks: 15,
    description: 'Description for hackchat',
    releaseDate: 'Feb 1, 2021',
    languageIcons: ['/javascript.svg', '/c++.svg'],
  },
  {
    name: 'truffle',
    url: 'https://github.com/burakorkmez/truffle',
    stars: 200,
    forks: 30,
    description: 'Description for truffle',
    releaseDate: 'Mar 1, 2021',
    languageIcons: ['/javascript.svg', '/python.svg'],
  },
  {
    name: 'hanime',
    url: 'https://github.com/burakorkmez/hanime',
    stars: 150,
    forks: 20,
    description: 'Description for hanime',
    releaseDate: 'Apr 1, 2021',
    languageIcons: ['/go.svg', '/java.svg'],
  },
  {
    name: 'restapi',
    url: 'https://github.com/burakorkmez/restapi',
    stars: 120,
    forks: 10,
    description: 'Description for restapi',
    releaseDate: 'May 1, 2021',
    languageIcons: ['/csharp.svg', '/go.svg'],
  },
];

// RepoItem component for individual repository
const RepoItem = ({ name, url, stars, forks, description, releaseDate, languageIcons }) => {
  return (
    <li className='mb-10 ms-7'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white'>
        <FaCodeBranch className='w-5 h-5 text-blue-800' />
      </span>
      <div className='flex gap-2 items-center flex-wrap'>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 text-lg font-semibold'
        >
          {name}
        </a>
        <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
          <FaRegStar /> {stars}
        </span>
        <span className='bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
          <FaCodeFork /> {forks}
        </span>
        <span className='cursor-pointer bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'>
          <FaCopy /> Clone
        </span>
      </div>
      <time className='block my-1 text-xs font-normal leading-none text-gray-400'>
        Released on {releaseDate}
      </time>
      <p className='mb-4 text-base font-normal text-gray-500'>{description}</p>
      <div className='flex gap-2'>
        {languageIcons.map((icon, index) => (
          <img key={index} src={icon} alt='Programming language icon' className='h-8' />
        ))}
      </div>
    </li>
  );
};

// Repo component to render list of repositories
const Repo = () => {
  return (
    <ul>
      {repos.map((repo) => (
        <RepoItem key={repo.name} {...repo} />
      ))}
    </ul>
  );
};

export default Repo;
