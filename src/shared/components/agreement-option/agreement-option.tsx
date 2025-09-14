import { NavLink } from 'react-router-dom';

import { IcSvgArrowRight } from '@shared/icons';
import IcSvgCheck from '@shared/icons/ic_check';
import { themeVars } from '@shared/styles';

import * as style from './agreement-option.css';

interface AgreementOptionProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  navigateTo: string;
  navState?: unknown;
}

const AgreementOption = ({
  label,
  checked: isChecked,
  onChange,
  navigateTo,
  navState,
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

      <NavLink
        to={navigateTo}
        state={navState}
      >
        <IcSvgArrowRight
          cursor="pointer"
          width="1.25rem"
          height="2.5rem"
          color={themeVars.color.bg_white}
        />
      </NavLink>
    </label>
  );
};

export default AgreementOption;
