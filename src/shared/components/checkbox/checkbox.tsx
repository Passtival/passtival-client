// import { useState } from 'react';
import IcSvgCheck from '@shared/icons/ic_check';

import * as style from './checkbox.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked: isChecked, onChange }: CheckboxProps) => {
  const toggleCheck = () => {
    onChange(!isChecked);
  };

  return (
    <label
      className={style.checkboxWrapper}
      onClick={toggleCheck}
    >
      <span className={`${style.checkbox} ${isChecked ? style.checked : ''}`}>
        {isChecked && <IcSvgCheck className={style.checkIcon} />}
      </span>
      <span className={style.labelText}>{label}</span>
    </label>
  );
};

export default Checkbox;
