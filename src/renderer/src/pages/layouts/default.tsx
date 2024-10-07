import {useState} from 'react'

import {Outlet} from 'react-router-dom'
import * as Collapsible from '@radix-ui/react-collapsible'

import {Header} from '../../components/Header'
import {Sidebar} from '../../components/Sidebar'

export function Default() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <Collapsible.Root defaultOpen onOpenChange={setIsSidebarOpen} className="h-screen w-screen text-notion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
