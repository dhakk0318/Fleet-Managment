'use client';
import { useState, useEffect } from 'react';
import { Bell, ChevronDown, icons, Menu,  Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  const [user, setUser] = useState<any>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();

  // Fetch user data when the component is mounted
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/protected`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();
        setUser(data.token);

        if (data.token.role !== "admin" && data.token.role !== "manager") {
          router.push("/unauthorized");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!res.ok) throw new Error("Logout failed");

      document.cookie = "access_token=; path=/; max-age=0;";
      router.push('/');
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-neutral-900 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            
            <Truck className="h-8 w-10" />

 
            </div>
            <p className="text-md text-green-500 font-semibold">
              Welcome, {user?.fullname || user?.email || 'User'}!
            </p>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
             
              <div className="ml-3 relative">
                <button
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
                </button>
                {isUserMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      
                      <button
                onClick={handleLogout}
                className="text-red-500 font-serif font-bold hover:text-green-600 transition duration-300"
              >
                Logout
              </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
