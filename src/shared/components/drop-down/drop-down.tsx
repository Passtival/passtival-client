import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { IcSvgArrow } from '@shared/icons';

import * as style from './drop-down.css';
import useClickOutside from './hooks/use-click-outside';

type Option = {
  displayName: string;
  value: string;
};

interface DropDownProps {
  selected: string | null;
  onSelect: (value: string) => void;
  options: Option[];
  placeholder?: string;
  icon: ReactNode;
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
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => setIsOpen(false), isOpen);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selected)?.displayName || placeholder;

  return (
    <div
      className={style.dropdownWrapper}
      ref={ref}
    >
      <div
        className={style.dropdownContainer}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={style.contentWrapper}>
          <div className={style.iconWrapper}>{icon}</div>
          <span className={style.dropdownPlaceholder}>{selectedLabel}</span>
          <IcSvgArrow
            className={style.rightIcon}
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }}
          />
        </div>
      </div>

      {isOpen && (
        <ul className={style.dropdownList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={style.optionItem}
              onClick={() => handleOptionClick(opt.value)}
            >
              {opt.displayName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
