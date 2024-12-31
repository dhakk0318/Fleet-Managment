"use client";
import React from "react";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";
export default function page() {
  return (
    <div>
      
      <VehicleList />
      <VehicleForm />
    </div>
  );
}
