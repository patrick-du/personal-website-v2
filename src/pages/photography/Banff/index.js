import React from 'react';
import Fade from 'react-reveal/Fade';
import PhotoWrapper from '../../../components/PhotoWrapper';
import FooterLink from '../../../components/FooterLink';
import PostTop from '../../../components/PostTop';
import { banffCollection } from '../../../data/photography/photos';

const Banff = () => {
  return (
    <div className="container-fluid mx-auto px-0">
      <div className="projectContainer mx-auto px-0">
        <Fade big>
          <PostTop
            subtitle="Summer 2018"
            title="Banff National Park, Alberta"
          />
          <hr className="my-3" />
        </Fade>
        {photos}
        <FooterLink
          path="/photography/calgary"
          title="Up Next"
          subtitle="Calgary"
        />
      </div>
    </div>
  );
};

const photos = banffCollection.map(({ img, desc }) => {
  const props = {
    img,
    desc,
  };
  return <PhotoWrapper exact {...props} />;
});

export default Banff;