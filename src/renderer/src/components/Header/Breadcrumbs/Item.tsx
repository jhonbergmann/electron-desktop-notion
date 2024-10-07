import {ReactNode} from 'react'
import clsx from 'clsx'

interface ItemProps {
  isActive?: boolean
  children: ReactNode
}

export function Item({isActive = false, children}: ItemProps) {
  const Comp = isActive ? 'span' : 'a'

  return (
    <Comp
      href="#"
      className={clsx('inline-flex items-center gap-2 hover:text-notion-50', {
        'text-notion-50': isActive,
      })}
    >
      {children}
    </Comp>
  )
}
