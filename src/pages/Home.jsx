import React, { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const Slideshow = lazy(() => import('../components/ImageSlider'));
const NgoDetails = lazy(() => import('../components/Details'));
const NGOSection = lazy(() => import('../components/NgoSection'));
const VisionSection = lazy(() => import('../components/Vision'));
const Certificate = lazy(() => import('../components/Certificate'));

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-green-600"></div>
    </div>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div>
        <Navbar />
        <NGOSection />
        <VisionSection />
        <NgoDetails />
        <Certificate/>
        <Slideshow />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Home;
