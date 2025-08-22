import Card from '@shared/components/card/card';

function Home() {
  const handleCardClick = (title: string) => {
    alert(`${title} 카드가 클릭되었습니다!`);
  };

  return (
    <div>
      <Card onClick={() => handleCardClick('우가우가신석기시대')}>
        <Card.Title>우가우가신석기시대</Card.Title>
        <Card.Major>글로벌경영학과</Card.Major>
        <Card.MajortTxt>우가우가! 신석기가 최고야!</Card.MajortTxt>
        <Card.Image src="https://example.com/image1.png" />
      </Card>

      <Card onClick={() => handleCardClick('검정색 똥')}>
        <Card.Title>검정색 똥</Card.Title>
        <Card.lostTxt>이런거 보관하면 안되겠죠?</Card.lostTxt>
        <Card.Image src="https://example.com/image2.png" />
      </Card>
    </div>
  );
}

export default Home;
