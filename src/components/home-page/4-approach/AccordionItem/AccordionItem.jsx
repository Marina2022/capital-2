'use client';

import {useState} from 'react';
import s from './AccordionItem.module.scss';

export default function AccordionItem({item}) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`${s.accordionItem} ${open ? s.isOpen : ''}`}>
      <div
        className={s.header}
        onClick={() => setOpen(!open)}
      >

        <div className={s.titleWrapper}>
          <div className={s.numberWrapper}>
            <span className={s.itemNumber}>{item.number}</span>
          </div>

          <span className={s.itemTitle}>{item.title}</span>

        </div>

        <div className={`${s.content} ${open ? s.open : ''}`}>
          <div className={s.text}>
            {item.text}
          </div>
        </div>

        <span className={s.icon}>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5607 1.80664L10.4453 10.0566L1.5607 18.3066"
                  stroke="#090909" strokeWidth="1.5"
                  strokeLinecap="square"/>
          </svg>
        </span>
      </div>

      {/* сюда переносим модификатор открытого состояния */}
      {/*<div className={`${s.content} ${open ? s.open : ''}`}>*/}
      {/*  <div className={s.text}>*/}
      {/*    {item.text}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </li>
  );
}
