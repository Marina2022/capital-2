'use client';

import { useEffect } from 'react';

export default function BodyReady() {
  useEffect(() => {
    document.body.classList.add('ready');
  }, []);

  return null; // ничего не рендерит, только эффект
}