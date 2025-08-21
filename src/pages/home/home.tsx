import Carousel from '@shared/components/carousel/carousel';

import noWakeupImage from '../../../public/no-wakeup.jpg';
import yupdduckImage from '../../../public/yupdduck.jpg';

const Home = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        infinite={true}
      >
        <img src={noWakeupImage} />
        <img src={yupdduckImage} />
      </Carousel>
      <Carousel>
        <img src={noWakeupImage} />
        <img src={yupdduckImage} />
      </Carousel>
    </div>
  );
};

export default Home;
