import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface for Vehicle
interface IVehicle extends Document {
  chassisNumber: string;
  registrationNumber: string;
  engineNumber?: string;
  manufactureDate?: Date;
  make: string;
  modelName: string;
  purchaseDate?: Date;
  registrationDate?: Date;
  bodyType?: string;
  fuelType?: string;
  color?: string;
  isActive: boolean;
  isAvailable: boolean;
  companyOwnership?: string;
  cylinderCount?: number;
  lastServiceDate?: Date;
  lastServiceOdometer?: number;
  currentOdometer: number;
  gpsTrackerId?: string; // For real-time tracking
}

// Mongoose schema for Vehicle
const vehicleSchema = new Schema<IVehicle>({
  chassisNumber: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  engineNumber: { type: String },
  manufactureDate: { type: Date },
  make: { type: String, required: true },
  modelName: { type: String, required: true },
  purchaseDate: { type: Date },
  registrationDate: { type: Date },
  bodyType: { type: String },
  fuelType: { type: String },
  color: { type: String },
  isActive: { type: Boolean, default: true },
  isAvailable: { type: Boolean, default: true },
  companyOwnership: { type: String },
  cylinderCount: { type: Number },
  lastServiceDate: { type: Date },
  lastServiceOdometer: { type: Number },
  currentOdometer: { type: Number, required: true },
  gpsTrackerId: { type: String }, // Optional, for real-time tracking
});

// Mongoose model for Vehicle
const Vehicle = mongoose.models.Vehicle || mongoose.model<IVehicle>('Vehicle', vehicleSchema);

export default Vehicle;
