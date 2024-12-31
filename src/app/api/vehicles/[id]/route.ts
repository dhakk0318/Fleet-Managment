import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Vehicle from '../../../models/Vehicle';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid vehicle ID' }, { status: 400 });
  }

  try {
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return NextResponse.json({ message: 'Vehicle not found' }, { status: 404 });
    }
    return NextResponse.json(vehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching vehicle', error: error.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid vehicle ID' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedVehicle) {
      return NextResponse.json({ message: 'Vehicle not found' }, { status: 404 });
    }
    return NextResponse.json(updatedVehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating vehicle', error: error.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: 'Invalid vehicle ID' }, { status: 400 });
  }

  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deletedVehicle) {
      return NextResponse.json({ message: 'Vehicle not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Vehicle deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting vehicle', error: error.message }, { status: 400 });
  }
}
