'use client'
import { Truck, AlertTriangle, Clock, DollarSign } from 'lucide-react'

const stats = [
  { name: 'Total Vehicles', stat: '42', icon: Truck },
  { name: 'Vehicles Needing Maintenance', stat: '5', icon: AlertTriangle },
  { name: 'Average Daily Uptime', stat: '9.2 hours', icon: Clock },
  { name: 'Total Fleet Value', stat: '$4.2M', icon: DollarSign },
]

export default function Dashboard() {
  return (
    <div className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white text-black p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">{stat.name}</h3>
                <stat.icon className="text-2xl text-gray-600" />
              </div>
              <div className="text-2xl font-bold">{stat.stat}</div>
              <p className="text-xs text-gray-500">+2 from last month</p>
            </div>
          ))}
        </div>

        {/* Additional Stats and Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fuel Efficiency */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Fuel Efficiency</h3>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold">7.2 km/l</div>
            <p className="text-xs text-gray-500">+0.3 km/l from last month</p>
          </div>

          {/* Maintenance Due */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Maintenance Due</h3>
              <span className="text-2xl">🔧</span>
            </div>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Vehicles need service</p>
          </div>
        </div>

        {/* Recent Activity and Upcoming Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Recent Activity */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🚗</span>
                Vehicle ABC-123 completed route
              </li>
              <li className="flex items-center">
                <span className="mr-2">👨‍✈️</span>
                Driver John Doe started shift
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔧</span>
                Maintenance completed for XYZ-789
              </li>
              <li className="flex items-center">
                <span className="mr-2">⛽</span>
                Fuel refill for vehicle DEF-456
              </li>
            </ul>
          </div>

          {/* Upcoming Maintenance */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Upcoming Maintenance</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🛢️</span>
                Oil change for vehicle GHI-012 (Due: 3 days)
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚗</span>
                Tire rotation for vehicle JKL-345 (Due: 5 days)
              </li>
              <li className="flex items-center">
                <span className="mr-2">🛑</span>
                Brake inspection for vehicle MNO-678 (Due: 1 week)
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Activity Detail */}
        <div className="mt-8 ">
          <div className="bg-gray-900 shadow-lg overflow-hidden sm:rounded-lg border border-gray-700">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-white">Recent Activity</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                View All
              </button>
            </div>
            <div className="border-t border-gray-700">
              <dl>
                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Vehicle ID</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">TRK-2023-001</dd>
                </div>
                <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Last Maintenance</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">June 15, 2023</dd>
                </div>
                <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Next Scheduled Service</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">August 1, 2023</dd>
                </div>
                <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Current Status</dt>
                  <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      In Service
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
