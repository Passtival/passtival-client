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

export interface LostItemForm {
  image?: string;
  title: string;
  foundLocation: string;
  date: string | null;
  hour: string | null;
  minute: string | null;
}

const LostItemReport = () => {
  const navigate = useNavigate();
  const [reportForm, setReportForm] = useState<LostItemForm>({
    image: undefined,
    title: '',
    foundLocation: '',
    date: null,
    hour: null,
    minute: null,
  });

  const isFormReady = useMemo(
    () =>
      Boolean(
        reportForm.title.trim() &&
          reportForm.foundLocation.trim() &&
          reportForm.date &&
          reportForm.hour &&
          reportForm.minute,
      ),
    [reportForm],
  );

  const handleSubmit = () => {
    if (!isFormReady) return;
    navigate(-1);
  };

  const handleChange = (file?: File) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setReportForm((prevForm) => ({ ...prevForm, image: url }));
    } else {
      if (reportForm.image) {
        URL.revokeObjectURL(reportForm.image);
      }
      setReportForm((prevForm) => ({ ...prevForm, image: undefined }));
    }
  };

  const DROPDOWNS = [
    {
      key: 'date',
      selected: reportForm.date,
      onSelect: (value: string | null) =>
        setReportForm((prev) => ({ ...prev, date: value })),
      options: DROP_DOWN_OPTIONS.DATE,
      placeholder: DROP_DOWN_PLACEHOLDER.DATE,
      icon: <IcSvgCalendar />,
    },
    {
      key: 'hour',
      selected: reportForm.hour,
      onSelect: (value: string | null) =>
        setReportForm((prev) => ({ ...prev, hour: value })),
      options: DROP_DOWN_OPTIONS.TIME_HOUR,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock />,
    },
    {
      key: 'minute',
      selected: reportForm.minute,
      onSelect: (value: string | null) =>
        setReportForm((prev) => ({ ...prev, minute: value })),
      options: DROP_DOWN_OPTIONS.TIME_MINUTE,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock />,
    },
  ];
  return (
    <>
      <TopNavigation
        title={LOST_ITEM_REPORT_TEXT.LOST_ITEM_CREATE}
        onRightClick={() => navigate(-1)}
      />
      <AddImage
        src={reportForm.image}
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
          value={reportForm.title}
          onChange={(e) =>
            setReportForm((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder={LOST_ITEM_REPORT_TEXT.TITLE_PLACEHOLDER}
        />
      </div>
      <div className={styles.textInputContainer}>
        <p className={styles.text}>{LOST_ITEM_REPORT_TEXT.FOUND_LOCATION}</p>
        <Input
          value={reportForm.foundLocation}
          onChange={(e) =>
            setReportForm((prev) => ({
              ...prev,
              foundLocation: e.target.value,
            }))
          }
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
    </>
  );
};
export default LostItemReport;
