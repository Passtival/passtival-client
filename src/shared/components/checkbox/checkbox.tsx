import { NavLink } from 'react-router-dom';

import IcSvgArrow from '@shared/icons/ic_arrow';
import IcSvgCheck from '@shared/icons/ic_check';
import { themeVars } from '@shared/styles';

import * as style from './checkbox.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  to: string;
}

const Checkbox = ({
  label,
  checked: isChecked,
  onChange,
  to,
}: CheckboxProps) => {
  const toggleCheck = () => {
    onChange(!isChecked);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <label className={style.checkboxWrapper}>
      <div
        className={style.checkboxLeft}
        onClick={toggleCheck}
      >
        <span className={`${style.checkbox} ${isChecked ? style.checked : ''}`}>
          {isChecked && (
            <IcSvgCheck
              className={style.checkIcon}
              style={{
                width: '1.4rem',
                height: '1.4rem',
                color: themeVars.color.bg_white,
              }}
            />
          )}
        </span>
        <span className={style.labelText}>{label}</span>
      </div>

      <NavLink
        to={to}
        onClick={handleArrowClick}
      >
        <IcSvgArrow
          style={{
            cursor: 'pointer',
            width: '1.3rem',
            height: '2.5rem',
            transform: 'rotate(180deg)',
          }}
        />
      </NavLink>
    </label>
  );
};

export default Checkbox;
