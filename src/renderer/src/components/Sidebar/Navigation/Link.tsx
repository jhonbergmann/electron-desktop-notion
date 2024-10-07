import {ReactNode} from 'react'
import {DotsThree} from 'phosphor-react'
import {NavLink} from 'react-router-dom'
import clsx from 'clsx'

interface LinkProps {
  children: ReactNode
  to: string
}

export function Link({children, to}: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        clsx(
          'flex items-center text-sm gap-2 text-notion-100 hover:text-notion-50 py-1 px-3 rounded group hover:bg-notion-700',
          {
            'bg-notion-700': isActive,
          },
        )
      }
    >
      <span className="truncate flex-1">{children}</span>

      <div className="flex items-center h-full group-hover:visible ml-auto text-notion-100">
        <button className="px-px rounded-sm hover:bg-notion-500">
          <DotsThree weight="bold" className="h-4 w-4" />
        </button>
      </div>
    </NavLink>
  )
}
