import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Icons from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';
import s from './MobileMenu.module.scss';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // функция для закрытия меню при клике на ссылку
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {!open && (
        <Dialog.Trigger className={s.menuButton}>
          <Icons.HamburgerMenuIcon width={28} height={28} />
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        <Dialog.Overlay className={s.menuOverlay} />
        <Dialog.Content className={s.menuContent}>
          <Dialog.Title>
            <VisuallyHidden>Мобильное меню</VisuallyHidden>
          </Dialog.Title>

          <Dialog.Close className={s.closeButton}>
            <Icons.Cross2Icon width={28} height={28} />
          </Dialog.Close>

          <nav className={s.menuNav}>
            
            <Link className={s.menuLink} href="/" onClick={handleLinkClick}>Home</Link>
            <Link className={s.menuLink} href="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
            <Link className={s.menuLink} href="/contacts" onClick={handleLinkClick}>Pitch your startup</Link>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
