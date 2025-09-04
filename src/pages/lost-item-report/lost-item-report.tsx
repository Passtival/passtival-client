import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddImage from '@shared/components/add-image/add-image';
import Button from '@shared/components/button/button';
import {
  DROP_DOWN_OPTIONS,
  DROP_DOWN_PLACEHOLDER,
} from '@shared/components/drop-down/constants/drop-down-value';
import DropDown from '@shared/components/drop-down/drop-down';
import Input from '@shared/components/input/input';
import TopNavigation from '@shared/components/top-navigation/top-navigation';
import { IcSvgCalendar, IcSvgClock } from '@shared/icons';

import * as styles from './lost-item-report.css';

const LOST_ITEM_REPORT_TEXT = {
  LOST_ITEM_CREATE: '분실물 등록',
  TITLE: '제목',
  TITLE_PLACEHOLDER: '글 제목',
  FOUND_LOCATION: '습득 장소',
  FOUND_LOCATION_PLACEHOLDER: 'ex) 운동장',
  FOUND_DATE_TIME: '습득 날짜 및 시간',
  CREATE: '등록하기',
};

const LostItemReport = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>();
  const [title, setTitle] = useState('');
  const [foundLocation, setFoundLocation] = useState('');
  const [date, setDate] = useState<string | null>(null);
  const [hour, setHour] = useState<string | null>(null);
  const [minute, setMinute] = useState<string | null>(null);

  const isFormReady = useMemo(
    () =>
      Boolean(title.trim() && foundLocation.trim() && date && hour && minute),
    [title, foundLocation, date, hour, minute],
  );

  const handleSubmit = () => {
    if (!isFormReady) return;
    navigate(-1);
  };

  const handleChange = (file?: File) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    } else {
      if (image) URL.revokeObjectURL(image);
      setImage(undefined);
    }
  };
  const DROPDOWNS = [
    {
      key: 'date',
      selected: date,
      onSelect: setDate,
      options: DROP_DOWN_OPTIONS.DATE,
      placeholder: DROP_DOWN_PLACEHOLDER.DATE,
      icon: <IcSvgCalendar />,
    },
    {
      key: 'hour',
      selected: hour,
      onSelect: setHour,
      options: DROP_DOWN_OPTIONS.TIME_HOUR,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock />,
    },
    {
      key: 'minute',
      selected: minute,
      onSelect: setMinute,
      options: DROP_DOWN_OPTIONS.TIME_MINUTE,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock />,
    },
  ];
  return (
    <div>
      <TopNavigation
        title={LOST_ITEM_REPORT_TEXT.LOST_ITEM_CREATE}
        onRightClick={() => navigate(-1)}
      />
      <AddImage
        src={image}
        onFileChange={handleChange}
      />
      <div className={styles.foundDateTimeContainer}>
        <p className={styles.text}>{LOST_ITEM_REPORT_TEXT.FOUND_DATE_TIME}</p>
        <div className={styles.dropdownContainer}>
          {DROPDOWNS.map((dropdown) => (
            <DropDown
              key={dropdown.key}
              selected={dropdown.selected}
              onSelect={dropdown.onSelect}
              options={dropdown.options}
              placeholder={dropdown.placeholder}
              icon={dropdown.icon}
            />
          ))}
        </div>
      </div>
      <div className={styles.textInputContainer}>
        <p className={styles.text}>{LOST_ITEM_REPORT_TEXT.TITLE}</p>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={LOST_ITEM_REPORT_TEXT.TITLE_PLACEHOLDER}
        />
      </div>
      <div className={styles.textInputContainer}>
        <p className={styles.text}>{LOST_ITEM_REPORT_TEXT.FOUND_LOCATION}</p>
        <Input
          value={foundLocation}
          onChange={(e) => setFoundLocation(e.target.value)}
          placeholder={LOST_ITEM_REPORT_TEXT.FOUND_LOCATION_PLACEHOLDER}
        />
      </div>
      <div className={styles.button}>
        <Button
          disabled={!isFormReady}
          onClick={handleSubmit}
        >
          {LOST_ITEM_REPORT_TEXT.CREATE}
        </Button>
      </div>
    </div>
  );
};
export default LostItemReport;
