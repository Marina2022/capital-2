'use client';
import s from './SuccessModal.module.scss/';
import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const SuccessModal = ({ open, onClose, children }) => {
  return (

    <Dialog.Root open={open} onOpenChange={onClose}  >
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}/>
        <Dialog.Content className={s.modal}>
          <Dialog.Title>
            <VisuallyHidden>Modal Window</VisuallyHidden>
          </Dialog.Title>
          {children}
          <Dialog.Close className={s.closeButton}>×</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SuccessModal;