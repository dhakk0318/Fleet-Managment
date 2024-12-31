'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BarChart2, Truck, Users, Droplet, Map, Bell, PenToolIcon as Tool, UserCheck, ChevronDown, ChevronRight, X, TruckIcon } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: BarChart2,
    subItems: [
      { name: 'Performance', href: '/analytics/performance' },
      { name: 'Reports', href: '/analytics/reports' },
    ]
  },
  { 
    name: 'Vehicle Management', 
    href: '', 
    icon: Truck,
    subItems: [
      { name: 'Tracking', href: '/vehicles/tracking' },
      { name: 'Maintenance', href: '/vehicles/maintenance' },
    ]
  },
  { name: 'Driver Management', href: '', icon: Users },
  { name: 'Fuel Management', href: '', icon: Droplet },
  { name: 'Route & Gate Keepers', href: '', icon: Map },
  { name: 'Notifications', href: '', icon: Bell },
  { name: 'Maintenance', href: '', icon: Tool },
  { name: 'Employee Management', href: '', icon: UserCheck },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])
  const pathname = usePathname()

  const toggleSubMenu = (name: string) => {
    setOpenSubMenus(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const renderNavItem = (item: any, depth = 0) => (
    <div key={item.name}>
      <Link
        href={item.href}
        className={`
          ${pathname === item.href
            ? 'bg-gray-800 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }
          group flex items-center px-2 py-2 text-sm font-medium rounded-md
          ${depth > 0 ? 'pl-6' : ''}
        `}
        onClick={() => item.subItems && toggleSubMenu(item.name)}
      >
        {item.icon && <item.icon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />}
        <span className="flex-1">{item.name}</span>
        {item.subItems && (
          openSubMenus.includes(item.name) ? (
            <ChevronDown className="ml-3 h-5 w-5" />
          ) : (
            <ChevronRight className="ml-3 h-5 w-5" />
          )
        )}
      </Link>
      {item.subItems && openSubMenus.includes(item.name) && (
        <div className="mt-1 space-y-1">
          {item.subItems.map((subItem: any) => renderNavItem(subItem, depth + 1))}
        </div>
      )}
    </div>
  )

  return (
    <>
      <div className="lg:hidden bg-zinc-950">
        {isOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-zinc-600 bg-opacity-75" onClick={() => setIsOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-zinc-900 border-r border-gray-700">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <TruckIcon className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src="/logo.svg" alt="Fleet Management" />
               
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map(item => renderNavItem(item))}
                </nav>
              </div>
            </div>
            <div className="flex-shrink-0 w-14"></div>
          </div>
        )}
      </div>

      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-zinc-950 border-r border-gray-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className='text-xl font-bold text-sky-400 font-serif' >Fleet Management ⛟</h1>

              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map(item => renderNavItem(item))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
