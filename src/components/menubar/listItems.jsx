import { Link } from 'react-router-dom';
import { ArrowDownIcon, ArrowUpIcon } from '../icons/icons';
import './listbar.css';
import { FlexSubMenu, OptionsComponent } from './submenu';

export function ListItems({ text, route, showIcon = true, submenuOptions }) {
  const optionsLength = submenuOptions?.length;
  const menuOptionBool = optionsLength > 5;
  const lessThanFiveOp = 'w-44';
  const MoreThanFiveOp = 'flex justify-between w-[25rem]';

  return (
    <div className="relative hover:text-skyblue link">
      <Link to={route} className="flex items-center gap-1 hover:text-skyblue">
        {text}
        {showIcon && <ArrowDownIcon className={'text-skyblue'}/>}
      </Link>

      <div className="absolute pt-4 w-44">
        {submenuOptions && (
          <ul
            className={` 
            elul absolute transition bg-[#1e2747] 
            text-white -left-4 border-gray-200 p-2 px-3 
            rounded-md shadow
             ${menuOptionBool ? MoreThanFiveOp : lessThanFiveOp}`}
          >
            <ArrowUpIcon className={'absolute -top-3 left-3'} />
            {menuOptionBool ? (
              <FlexSubMenu submenuOptions={submenuOptions} />
            ) : (
              <OptionsComponent submenuOptions={submenuOptions} />
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
