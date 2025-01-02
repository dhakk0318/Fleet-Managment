// components/VehicleForm.tsx
"use client"
import React, { useState } from 'react';

const VehicleForm = ({ vehicle, onSubmit }: { vehicle?: any, onSubmit: (vehicleData: any) => void }) => {
  const [formData, setFormData] = useState({
    chassisNumber: vehicle?.chassisNumber || '',
    registrationNumber: vehicle?.registrationNumber || '',
    engineNumber: vehicle?.engineNumber || '',
    modelName: vehicle?.modelName || '',
    make: vehicle?.make || '',
    purchaseDate: vehicle?.purchaseDate || '',
    registrationDate: vehicle?.registrationDate || '',
    bodyType: vehicle?.bodyType || '',
    fuelType: vehicle?.fuelType || '',
    color: vehicle?.color || '',
    isActive: vehicle?.isActive || true,
    isAvailable: vehicle?.isAvailable || true,
    companyOwnership: vehicle?.companyOwnership || '',
    cylinderCount: vehicle?.cylinderCount || '',
    lastServiceDate: vehicle?.lastServiceDate || '',
    lastServiceOdometer: vehicle?.lastServiceOdometer || '',
    currentOdometer: vehicle?.currentOdometer || '',
    gpsTrackerId: vehicle?.gpsTrackerId || '',

     
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">{vehicle ? 'Update Vehicle' : 'Add New Vehicle'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="chassisNumber" className="block text-sm font-medium text-gray-700">Chassis Number</label>
          <input
            id="chassisNumber"
            name="chassisNumber"
            type="text"
            value={formData.chassisNumber}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
          <input
            id="registrationNumber"
            name="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="engineNumber" className="block text-sm font-medium text-gray-700">Engine Number</label>
          <input
            id="engineNumber"
            name="engineNumber"
            type="text"
            value={formData.engineNumber}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="modelName" className="block text-sm font-medium text-gray-700">Model Name</label>
          <input
            id="modelName"
            name="modelName"
            type="text"
            value={formData.modelName}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="make" className="block text-sm font-medium text-gray-700">Make</label>
          <input
            id="make"
            name="make"
            type="text"
            value={formData.make}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">Purchase Date</label>
          <input
            id="purchaseDate"
            name="purchaseDate"
            type="date"
            value={formData.purchaseDate}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">Registration Date</label>
          <input
            id="registrationDate"
            name="registrationDate"
            type="date"
            value={formData.registrationDate}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bodyType" className="block text-sm font-medium text-gray-700">Body Type</label>
          <input
            id="bodyType"
            name="bodyType"
            type="text"
            value={formData.bodyType}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">Fuel Type</label>
          <input
            id="fuelType"
            name="fuelType"
            type="text"
            value={formData.fuelType}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
          <input
            id="color"
            name="color"
            type="text"
            value={formData.color}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isActive" className="block text-sm font-medium text-gray-700">Is Active</label>
          <input
            id="isActive"
            name="isActive"
            type="checkbox"
            checked={formData.isActive}
            onChange={handleInputChange}
            className="w-4 h-4 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isAvailable" className="block text-sm font-medium text-gray-700">Is Available</label>
          <input
            id="isAvailable"
            name="isAvailable"
            type="checkbox"
            checked={formData.isAvailable}
            onChange={handleInputChange}
            className="w-4 h-4 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyOwnership" className="block text-sm font-medium text-gray-700">Company Ownership</label>
          <input
            id="companyOwnership"
            name="companyOwnership"
            type="text"
            value={formData.companyOwnership}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cylinderCount" className="block text-sm font-medium text-gray-700">Cylinder Count</label>
          <input
            id="cylinderCount"
            name="cylinderCount"
            type="number"
            value={formData.cylinderCount}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastServiceDate" className="block text-sm font-medium text-gray-700">Last Service Date</label>
          <input
            id="lastServiceDate"
            name="lastServiceDate"
            type="date"
            value={formData.lastServiceDate}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastServiceOdometer" className="block text-sm font-medium text-gray-700">Last Service Odometer</label>
          <input
            id="lastServiceOdometer"
            name="lastServiceOdometer"
            type="number"
            value={formData.lastServiceOdometer}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currentOdometer" className="block text-sm font-medium text-gray-700">Current Odometer</label>
          <input
            id="currentOdometer"
            name="currentOdometer"
            type="number"
            value={formData.currentOdometer}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gpsTrackerId" className="block text-sm font-medium text-gray-700">GPS Tracker ID</label>
          <input
            id="gpsTrackerId"
            name="gpsTrackerId"
            type="text"
            value={formData.gpsTrackerId}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mt-6">
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
            {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VehicleForm;
