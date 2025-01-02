"use client";
import { useEffect, useState } from "react";

const Home = () => {
  const [vehicles, setVehicles] = useState<any[]>([]); // Ensure it's typed as an array
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch vehicle data
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/vehicles");
        if (!response.ok) {
          throw new Error("Failed to fetch vehicles");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setVehicles(data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchVehicles();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
          Error: {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Vehicle Details
      </h1>
      <div className="overflow-x-auto p-6 rounded-lg shadow-2xl border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-900">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="py-4 px-6 font-medium">Chassis Number</th>
              <th className="py-4 px-6 font-medium">Registration Number</th>
              <th className="py-4 px-6 font-medium">Engine Number</th>
              <th className="py-4 px-6 font-medium">Make</th>
              <th className="py-4 px-6 font-medium">Model</th>
              <th className="py-4 px-6 font-medium">Fuel Type</th>
              <th className="py-4 px-6 font-medium">Color</th>
              <th className="py-4 px-6 font-medium">Last Service Date</th>
              <th className="py-4 px-6 font-medium">Current Odometer</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr
                key={vehicle._id}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-3 px-6">{vehicle.chassisNumber}</td>
                <td className="py-3 px-6">{vehicle.registrationNumber}</td>
                <td className="py-3 px-6">{vehicle.engineNumber}</td>
                <td className="py-3 px-6">{vehicle.make}</td>
                <td className="py-3 px-6">{vehicle.modelName}</td>
                <td className="py-3 px-6">{vehicle.fuelType}</td>
                <td className="py-3 px-6">{vehicle.color}</td>
                <td className="py-3 px-6">
                  {new Date(vehicle.lastServiceDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-6">{vehicle.currentOdometer} km</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
