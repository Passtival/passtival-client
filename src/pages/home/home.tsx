import Carousel from '@shared/components/carousel/carousel';

import cuteImage from '../../../public/cute.jpg';
import noWakeupImage from '../../../public/no-wakeup.jpg';
import yupdduckImage from '../../../public/yupdduck.jpg';

const Home = () => {
  return (
    <div>
      <Carousel type="Apply">
        <img src={noWakeupImage} />
        <img src={yupdduckImage} />
        <img src={noWakeupImage} />
        <img src={cuteImage} />
        <img src={yupdduckImage} />
        <img src={noWakeupImage} />
        <img src={cuteImage} />
      </Carousel>
      <Carousel type="details">
        <img src={noWakeupImage} />
        <img src={yupdduckImage} />
      </Carousel>
      <Carousel
        type="details"
        infinite={true}
      >
        <img src={noWakeupImage} />
        <img src={yupdduckImage} />
      </Carousel>
    </div>
  );
};

export default Home;
