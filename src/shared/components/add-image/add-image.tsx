import { IcSvgCamera, IcSvgX } from '@shared/icons';
import { themeVars } from '@shared/styles';

import * as styles from './add-image.css';

interface AddImageProps {
  src?: string;
  onFileChange: (file?: File) => void;
  disabled?: boolean;
}
const AddImage = ({ src, onFileChange, disabled }: AddImageProps) => {
  const current = src ? 1 : 0;
  const max = 1;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    onFileChange(e.target.files[0]);
    e.target.value = '';
  };
  const handleRemove = () => {
    onFileChange(undefined);
  };
  return (
    <div className={styles.container}>
      <label className={styles.addButton}>
        <IcSvgCamera
          width="1.5rem"
          height="1.33rem"
          color={themeVars.color.main_yellow}
        />
        <input
          className={styles.image}
          type="file"
          accept="image/*"
          hidden
          disabled={disabled}
          onChange={handleFileChange}
        />
        <div className={styles.countText}>
          <p className={styles.current}>{current}</p>
          <p className={styles.max}>/ {max}</p>
        </div>
      </label>
      {src && (
        <div className={styles.uploadContainer}>
          <img
            src={src}
            alt="uploaded"
          />
          <button
            onClick={handleRemove}
            className={styles.removeButton}
          >
            <IcSvgX
              width="0.6rem"
              height="0.6rem"
              color={themeVars.color.bg_white}
            />
          </button>
        </div>
      )}
    </div>
  );
};
export default AddImage;
