import {
  CONSENT_CONTENT,
  CONSENT_SUBTITLE,
  CONSENT_TITLE,
} from '@pages/info-share/constants/INFO_SHARE_CONSENT';

import * as styles from './info-share.css';

const InfoShare = () => {
  return (
    <article className={styles.container}>
      <header>
        <h1 className={styles.title}>{CONSENT_TITLE}</h1>
        <p className={styles.subtitle}>{CONSENT_SUBTITLE}</p>
      </header>

      <ol>
        {CONSENT_CONTENT.map(({ id, TITLE, TEXT }) => (
          <li key={id}>
            <h2 className={styles.itemTitle}>{TITLE}</h2>
            <ul>
              {TEXT.map((text, i) => (
                <li
                  className={styles.text}
                  key={i}
                >
                  {text}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </article>
  );
};

export default InfoShare;
