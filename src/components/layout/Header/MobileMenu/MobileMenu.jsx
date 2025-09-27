import s from './MobileMenu.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import * as Icons from '@radix-ui/react-icons';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={s.menuButton}>
        <Icons.HamburgerMenuIcon width={28} height={28} />
      </Dialog.Trigger>

      <Dialog.Overlay className={s.menuOverlay} />

      <Dialog.Content className={s.menuContent}>
        <Dialog.Title>
          <VisuallyHidden>Мобильное меню</VisuallyHidden>
        </Dialog.Title>

        <Dialog.Close className={s.closeButton}>
          <Icons.Cross2Icon width={28} height={28} />
        </Dialog.Close>

        <nav className={s.menuNav}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contacts">Contacts</Link>
        </nav>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MobileMenu;
