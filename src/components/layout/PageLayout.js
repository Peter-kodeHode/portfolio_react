import React from 'react';
import AnimatedPage from '../AnimatedPage';
import Footer from '../../components/footer';

const PageLayout = ({ children, direction, pageRef, className }) => {
  return (
    <AnimatedPage direction={direction}>
      <div className={className} tabIndex="0" ref={pageRef}>
        {children}
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default PageLayout;