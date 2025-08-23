import Card from '@shared/components/card/card';

interface CardData {
  id: number;
  title: string;
  major: string;
  description: string;
  img: string;
  type: 'details' | 'apply';
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: '타이틀테스트타이틀테스트타이틀테스트',
    major: '학과이름테스트입니다학과이름테스트입니다',
    description:
      '학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다',
    img: '',
    type: 'details',
  },
  {
    id: 2,
    title: '테스트테스트테스트테테테',
    major: '',
    description: '설명을 적으세요',
    img: '',
    type: 'apply',
  },
];

const Home = () => {
  return (
    <div>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          major={card.major}
          description={card.description}
          img={card.img}
          type={card.type}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};
export default Home;
