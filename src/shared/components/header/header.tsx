import { IcSvgLogo } from '@shared/icons';

import * as styles from './header.css';

interface HeaderProps {
  description: string;
  borderRadius: 'rounded' | 'square';
  bgColor: 'white' | 'gray';
}

const Header = ({ description, borderRadius, bgColor }: HeaderProps) => {
  return (
    <div className={styles.container({ borderRadius, bgColor })}>
      <IcSvgLogo
        width="2.2rem"
        height="2.4rem"
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Header;
