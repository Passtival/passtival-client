interface CompleteProps {
  currentDay: string;
}

const Closed = ({ currentDay }: CompleteProps) => (
  <>
    <div>{currentDay} 마감되었습니다.</div>
  </>
);

export default Closed;
