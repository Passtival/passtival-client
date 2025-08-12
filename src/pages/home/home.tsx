import { CloseIcon, CameraIcon } from '@shared/icons';

const Home = () => {
  return (
    <div>
      <h1>Home에서 svgr 테스트</h1>
      <CloseIcon
        width={48}
        height={48}
      />
      <CameraIcon
        width={48}
        height={48}
      />
    </div>
  );
};

export default Home;
