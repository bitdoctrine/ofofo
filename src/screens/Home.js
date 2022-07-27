import React from 'react';
import Carousel from '../components/Carousel/Carousel';

const slides = [{url: ''}]
const Home = () => {
  return (
    <div className="w-full h-full bg-blue-50">
      <p className="text-blue-400">Trending Today</p>
      <Carousel slides={slides} />
    </div>
  );
};

export default Home;
