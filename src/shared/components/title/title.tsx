import { themeVars } from '@shared/styles';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title = ({ mainTitle, subTitle }: TitleProps) => {
  return (
    <>
      <p style={themeVars.fontStyles.title_b_22}>{mainTitle}</p>
      {subTitle && <p style={themeVars.fontStyles.caption2_m_12}>{subTitle}</p>}
    </>
  );
};

export default Title;
