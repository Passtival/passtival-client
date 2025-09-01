interface CompleteProps {
  currentDay: string;
}

const Complete = ({ currentDay }: CompleteProps) => (
  <>
    <div>{currentDay} 신청이 완료되었습니다.</div>
  </>
);

export default Complete;
