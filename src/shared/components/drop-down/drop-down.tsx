import { useState } from 'react';
import type { ReactNode } from 'react';

import { IcSvgArrow } from '@shared/icons';

import {
  dropdownWrapper,
  dropdownContainer,
  dropdownContainerOpen,
  contentWrapper,
  leftWrapper,
  iconWrapper,
  dropdownPlaceholder,
  rightIcon,
  dropdownList,
  dropdownOption,
  dropdownOptionSelected,
} from './drop-down.css';
import useClickOutside from './hooks/use-click-outside';
import { useScrollIntoViewOnOpen } from './hooks/use-move-scroll';

type Option = {
  displayName: string;
  value: string;
};

interface DropDownProps {
  selected: string | null;
  onSelect: (value: string) => void;
  options: Option[] | readonly Option[];
  placeholder?: string;
  icon?: ReactNode;
}

const DEFAULT_PLACEHOLDER = '';

const DropDown = ({
  selected,
  onSelect,
  options,
  placeholder = DEFAULT_PLACEHOLDER,
  icon,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useScrollIntoViewOnOpen(isOpen, 48);

  useClickOutside(ref, () => setIsOpen(false), isOpen);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selected)?.displayName || placeholder;

  return (
    <div
      className={dropdownWrapper}
      ref={ref}
    >
      <div
        className={isOpen ? dropdownContainerOpen : dropdownContainer}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={contentWrapper}>
          <div className={leftWrapper}>
            {icon && <div className={iconWrapper}>{icon}</div>}
            <span className={dropdownPlaceholder}>{selectedLabel}</span>
          </div>
          <IcSvgArrow
            className={rightIcon}
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }}
          />
        </div>
      </div>

      {isOpen && (
        <ul className={dropdownList}>
          {options.map((opt) => {
            const isSelected = opt.value === selected;
            return (
              <li
                key={opt.value}
                className={`${dropdownOption} ${isSelected ? dropdownOptionSelected : ''}`}
                onClick={() => handleOptionClick(opt.value)}
              >
                {opt.displayName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
