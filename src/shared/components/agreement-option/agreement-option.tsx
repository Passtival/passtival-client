import { NavLink } from 'react-router-dom';

import IcSvgArrow from '@shared/icons/ic_arrow';
import IcSvgCheck from '@shared/icons/ic_check';
import { themeVars } from '@shared/styles';

import * as style from './agreement-option.css';

interface AgreementOptionProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  navigateTo: string;
}

const AgreementOption = ({
  label,
  checked: isChecked,
  onChange,
  navigateTo,
}: AgreementOptionProps) => {
  const toggleCheck = () => {
    onChange(!isChecked);
  };

  return (
    <label className={style.agreementOption}>
      <div
        className={style.checkboxLeft}
        onClick={toggleCheck}
      >
        <span className={style.checkbox({ checked: isChecked })}>
          <IcSvgCheck
            width="1.4rem"
            height="1.4rem"
            color={themeVars.color.bg_white}
          />
        </span>
        <span className={style.labelText}>{label}</span>
      </div>

      <NavLink to={navigateTo}>
        <IcSvgArrow
          className={style.arrowIcon}
          cursor="pointer"
          width="1.3rem"
          height="2.5rem"
        />
      </NavLink>
    </label>
  );
};

export default AgreementOption;
