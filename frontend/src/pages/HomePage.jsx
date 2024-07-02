import React from 'react';
import Search from '../components/Search';
import ProfileInfo from '../components/ProfileInfo';
import SortRepos from '../components/SortRepos';
import Repos from '../components/Repos';
// Uncomment these as needed
// import SortRepos from '../components/SortRepos';
// import Repos from '../components/Repos';
//  import Spinner from '../components/Spinner';

const HomePage = () => {
  return (
    <div className='m-4'>
      <Search />
      <SortRepos /> 
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        {<ProfileInfo />}
        {/* Uncomment these as needed */}
        <Repos />
       {/* <Spinner /> */}
      </div>
    </div>
  );
};

export default HomePage;
