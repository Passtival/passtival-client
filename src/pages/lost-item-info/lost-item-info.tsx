import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Carousel from '@shared/components/carousel/carousel';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import Modal from '@shared/components/modal/modal';
import TopNavigation from '@shared/components/top-navigation/top-navigation';
import { IcSvgTrashcan } from '@shared/icons';

import * as styles from './lost-item-info.css';

const mockImages = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
];

const InfoMock = {
  '1': {
    title: '100만원',
    timevalue: '9/23 15:00',
    locationvalue: '3번째 소나무 5번째 뿌리',
  },
  '2': {
    title: '전공책',
    timevalue: '9/23 15:00',
    locationvalue: '3번째 소나무 5번째 뿌리',
  },
};

const LostItemsInfo = () => {
  const { id } = useParams();
  const mockData = InfoMock[id as keyof typeof InfoMock];
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userRole: 'user' | 'admin' = 'admin';
    setIsAdmin(userRole === 'admin');
  }, []);

  const handleTrashcanClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeletePost = () => {
    closeModal();
  };

  return (
    <>
      <TopNavigation
        title="분실물 상세 정보"
        rightIcon={
          isAdmin ? (
            <IcSvgTrashcan
              width="1.6rem"
              height="1.8rem"
            />
          ) : null
        }
        onRightClick={isAdmin ? handleTrashcanClick : undefined}
      />

      <div className={styles.container}>
        <Carousel type="details">
          {mockImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`분실물 이미지 ${index + 1}`}
            />
          ))}
        </Carousel>

        <DetailInfo
          title={mockData.title}
          time="습득시간"
          timevalue={mockData.timevalue}
          location="습득위치"
          locationvalue={mockData.locationvalue}
        />
      </div>

      {isModalOpen && (
        <Modal.Container open={isModalOpen}>
          <Modal.Content>
            <Modal.Body>
              <Modal.Title>게시글 삭제</Modal.Title>
              <Modal.Description>게시글을 삭제하시겠습니까?</Modal.Description>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close onClick={closeModal}>취소</Modal.Close>
              <Modal.Action onClick={handleDeletePost}>삭제하기</Modal.Action>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Container>
      )}
    </>
  );
};
export default LostItemsInfo;
