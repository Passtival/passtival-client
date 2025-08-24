import Card from '@shared/components/card/card';

interface CardData {
  id: number;
  title: string;
  assignee: string;
  description: string;
  img: string;
  type: 'sm' | 'lg';
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: '타이틀테스트타이틀테스트타이틀테스트',
    assignee: '학과이름테스트입니다학과이름테스트입니다',
    description:
      '학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다학교에갑니다',
    img: '',
    type: 'sm',
  },
  {
    id: 2,
    title: '테스트테스트테스트테테테',
    assignee: '',
    description: '설명을 적으세요',
    img: '',
    type: 'lg',
  },
];

const Home = () => {
  return (
    <div>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          assignee={card.assignee}
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
