import {ReactNode} from 'react'

interface SectionTitleProps {
  children: ReactNode
}

export function SectionTitle(props: SectionTitleProps) {
  return <div className="text-notion-300 mx-3 uppercase text-xs font-semibold" {...props} />
}
