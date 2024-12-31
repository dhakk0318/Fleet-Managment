import '../../globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './Sidebar'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fleet Management Dashboard',
  description: 'Manage your vehicle fleet efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className={`${inter.className} h-full text-gray-100`}>
        <div className="flex h-full ">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-black p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

