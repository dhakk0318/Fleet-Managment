import mongoose, { Document, Schema  } from 'mongoose';

// TypeScript type for Employee
interface IEmployee extends Document {
  employeeCode: string;
  fullName?: string;
  email?: string;
  password?: string;
  department?: string;
  registrationDate: Date;
  totalApplications: number;
  isAdmin: boolean;
  role: 'admin' | 'manager' | 'gatekeeper' | 'employee';
}

// Mongoose Schema for Employee
const employeeSchema = new Schema<IEmployee>({
  employeeCode: { type: String, required: true, unique: true },
  fullName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  department: { type: String },
  registrationDate: { type: Date, default: Date.now },
  totalApplications: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ['admin', 'manager', 'gatekeeper', 'employee'],
    default: 'employee',
  },
});

// Mongoose Model for Employee
const Employee = mongoose.models.Employee || mongoose.model<IEmployee>('Employee', employeeSchema);

export default Employee;
