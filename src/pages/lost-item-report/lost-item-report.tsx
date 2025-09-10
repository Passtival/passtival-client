import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOST_ITEM_REPORT_TEXT } from '@pages/lost-item-report/constants/LOST_ITEM_REPORT_TEXT';

import { LOST_ITEM_QUERY_KEY } from '@shared/apis/keys/query-key';
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
import { themeVars } from '@shared/styles';

import { LOST_ITEM_MUTATION_OPTIONS } from './apis/queries';
import * as styles from './lost-item-report.css';

export interface LostItemForm {
  image?: string;
  imageFile?: File;
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
    imageFile: undefined,
    title: '',
    foundLocation: '',
    date: null,
    hour: null,
    minute: null,
  });

  const queryClient = useQueryClient();

  const createFoundItemMutation = useMutation({
    ...LOST_ITEM_MUTATION_OPTIONS.CREATE_FOUND_ITEM(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LOST_ITEM_QUERY_KEY.LOST_ITEM_PREVIEW(),
      });
    },
    onError: (error) => {
      console.error('분실물 등록 실패:', error);
      alert(error.message || '분실물 등록에 실패했습니다.');
    },
  });

  const isFormReady = useMemo(
    () =>
      Boolean(
        reportForm.title &&
          reportForm.foundLocation &&
          reportForm.date &&
          reportForm.hour &&
          reportForm.minute,
      ),
    [reportForm],
  );

  const isLoading = createFoundItemMutation.isPending;

  const handleSubmit = async () => {
    if (!isFormReady) return;

    const foundDateTime = new Date(
      `${reportForm.date}T${reportForm.hour}:${reportForm.minute}:00`,
    ).toISOString();

    await createFoundItemMutation.mutateAsync({
      title: reportForm.title,
      area: reportForm.foundLocation,
      foundDateTime,
      imageFile: reportForm.imageFile,
    });

    navigate(-1);
  };

  const handleChange = (file?: File) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setReportForm((prevForm) => ({
        ...prevForm,
        image: url,
        imageFile: file,
      }));
    } else {
      if (reportForm.image) {
        URL.revokeObjectURL(reportForm.image);
      }
      setReportForm((prevForm) => ({
        ...prevForm,
        image: undefined,
        imageFile: undefined,
      }));
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
      icon: <IcSvgCalendar color={themeVars.color.bg_white} />,
    },
    {
      key: 'hour',
      selected: reportForm.hour,
      onSelect: (value: string | null) =>
        setReportForm((prev) => ({ ...prev, hour: value })),
      options: DROP_DOWN_OPTIONS.TIME_HOUR,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock color={themeVars.color.bg_white} />,
    },
    {
      key: 'minute',
      selected: reportForm.minute,
      onSelect: (value: string | null) =>
        setReportForm((prev) => ({ ...prev, minute: value })),
      options: DROP_DOWN_OPTIONS.TIME_MINUTE,
      placeholder: DROP_DOWN_PLACEHOLDER.TIME,
      icon: <IcSvgClock color={themeVars.color.bg_white} />,
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
          disabled={!isFormReady || isLoading}
          onClick={handleSubmit}
        >
          {isLoading
            ? LOST_ITEM_REPORT_TEXT.UPLOADING
            : LOST_ITEM_REPORT_TEXT.CREATE}
        </Button>
      </div>
    </>
  );
};

export default LostItemReport;
