import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  FOUND_ITEM_QUERY_OPTIONS,
  LOST_ITEM_MUTATION_OPTIONS,
} from '@pages/lost-item-report/apis/queries';

import { LOST_ITEM_QUERY_KEY } from '@shared/apis/keys/query-key';
import { tokenService } from '@shared/auth/services/token-service';
import Carousel from '@shared/components/carousel/carousel';
import DetailInfo from '@shared/components/detail-eventinfo/detail-info';
import Modal from '@shared/components/modal/modal';
import TopNavigation from '@shared/components/top-navigation/top-navigation';
import { IcSvgTrashcan } from '@shared/icons';
import { getFormattedDateTime } from '@shared/utils/formatDateTime';

import * as styles from './lost-item-info.css';

const LostItemsInfo = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAdmin = !!tokenService.getAdminAccessToken();

  const {
    data: foundItemDetail,

    error,
  } = useQuery({
    ...FOUND_ITEM_QUERY_OPTIONS.FOUND_ITEM_DETAIL(parseInt(id!)),
    enabled: !!id,
  });

  const handleTrashcanClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteFoundItemMutation = useMutation({
    ...LOST_ITEM_MUTATION_OPTIONS.DELETE_FOUND_ITEM(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LOST_ITEM_QUERY_KEY.LOST_ITEM_PREVIEW(),
      });
      navigate('/lost-items');
    },
    onError: (error: AxiosError) => {
      console.error('분실물 삭제 실패:', error);
      if (error.response) {
        console.error('서버 응답:', error.response.data);
        console.error('상태 코드:', error.response.status);
      }
      alert('분실물 삭제에 실패했습니다. 서버 에러가 발생했습니다.');
    },
  });

  const handleDeletePost = () => {
    if (id) {
      deleteFoundItemMutation.mutateAsync(parseInt(id)).then(() => {
        setIsModalOpen(false);
      });
    }
  };

  if (error) return <div>에러가 발생했습니다.</div>;
  if (!foundItemDetail?.result)
    return <div>분실물 정보를 찾을 수 없습니다.</div>;

  const { result } = foundItemDetail;

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
          {result.imagePath ? (
            <img
              src={result.imagePath}
              alt={result.title}
            />
          ) : (
            <div>이미지가 없습니다</div>
          )}
        </Carousel>

        <DetailInfo
          title={result.title}
          time="습득시간"
          timevalue={getFormattedDateTime(result.foundDateTime ?? '')}
          location="습득위치"
          locationvalue={result.area}
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
