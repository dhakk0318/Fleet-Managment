"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<any[]>([]); // State to hold vehicles data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string>(""); // Error handling state

  // Fetch vehicles data
  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await axios.get("/api/vehicles");
        setVehicles(response.data || []); // Default to empty array if no data
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setError("Failed to fetch vehicles");
        setVehicles([]); // Fallback to empty array on error
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Manage Vehicles</h1>

      {loading ? (
        <p className="text-center text-blue-500">Loading...</p> // Loading text
      ) : error ? (
        <p className="text-center text-red-500">{error}</p> // Error message
      ) : (
        <div className="overflow-x-auto p-6">
          <table className="min-w-full text-black bg-white shadow-md rounded-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Chassis Number</th>
                <th className="p-3">Registration Number</th>
                <th className="p-3">Model</th>
                <th className="p-3">Make</th>
                <th className="p-3">ManufactureDate</th>
                <th className="p-3">fuelType</th>
                <th className="p-3">color</th>
                <th className="p-3">cylinderCount</th>

                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? (
                vehicles.map((vehicle) => (
                  <tr key={vehicle._id} className="hover:bg-gray-50">
                    <td className="p-3">{vehicle.chassisNumber}</td>
                    <td className="p-3">{vehicle.registrationNumber}</td>
                    <td className="p-3">{vehicle.modelName}</td>
                    <td className="p-3">{vehicle.make}</td>
                    <td className="p-3">{vehicle.manufactureDate}</td>
                    <td className="p-3">{vehicle.fuelType}</td>
                    <td className="p-3">{vehicle.color}</td>
                    <td className="p-3">{vehicle.cylinderCount}</td>
                    
                    <td className="p-3 space-x-3">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-3 text-center text-gray-500">
                    No vehicles available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VehiclesPage;
