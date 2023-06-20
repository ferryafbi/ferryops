import styles from './Modal.module.css'
import { cn } from '../../lib/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react'
import ReacDOM from 'react-dom'

export const modalVariants = cva(styles.main, {
  variants: {
    variant: {
      default: styles.default,
      withIlustration: styles['with-ilustration'],
    },
    size: {
      default: styles['size-default'],
      sm: styles['size-sm'],
      lg: styles['size-lg'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  show: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export default function Modal({
  show,
  onClose,
  variant,
  size,
  className,
  children,
  ...props
}: ModalProps) {
  const [doc, setDoc] = useState<Document>()

  useEffect(() => {
    setDoc(document)
  }, [])

  const modalContent = show ? (
    <div
      className={(cn(modalVariants({ variant, size, className })), styles.main)}
      {...props}
    >
      <div className={styles.container}>
        <span className={styles.clear} onClick={() => onClose(false)} />
        {children}
      </div>
      <div className={styles.backdrop} />
    </div>
  ) : (
    <></>
  )

  if (doc) {
    return ReacDOM.createPortal(
      modalContent,
      doc.getElementById('modal-root') as HTMLElement
    )
  }

  return null
}
