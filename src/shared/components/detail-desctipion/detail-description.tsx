import * as styles from './detail-description.css';

interface Song {
  singer?: string;
  title?: string;
}

interface DescriptionProps {
  title?: string;
  description?: string;
  songsData?: Song[];
}

const DetailDescription = ({
  title,
  description,
  songsData,
}: DescriptionProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}

      {songsData && (
        <div className={styles.songslist}>
          {songsData.map((song, index) => (
            <div key={index}>
              {song.singer} - {song.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailDescription;
