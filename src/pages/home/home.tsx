import Card from '@shared/components/card/card';

function Home() {
  const handleCardClick = (title: string) => {
    alert(`${title} 카드가 클릭되었습니다!`);
  };

  return (
    <div>
      <Card.Container onClick={() => handleCardClick('우가우가신석기시대')}>
        <Card.Content>
          <Card.Title>우가우가신석기시대</Card.Title>
          <Card.Major>글로벌경영학과</Card.Major>
          <Card.MajortTxt>
            우가우가!우가ㅜ아구ㅏ우ㅏㅜ아 신석기가 최고야!
          </Card.MajortTxt>
        </Card.Content>
        <Card.Img src="" />
      </Card.Container>

      <Card.Container
        size="lg"
        onClick={() => handleCardClick('검정색 똥')}
      >
        <Card.Content>
          <Card.Title>검정색 똥밥바바바바바바바바바바바바</Card.Title>
          <Card.LostTxt>
            안녕하세요카드만들었어요안녕하세요카드만들었어요안녕하세요카드만들었어요안녕하세요카드만들었어요안녕하세요카드만들었어요안녕하세요카드만들었어요
          </Card.LostTxt>
        </Card.Content>
        <Card.Img src="" />
      </Card.Container>
    </div>
  );
}

export default Home;
