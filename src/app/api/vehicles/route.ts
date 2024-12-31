import { NextRequest, NextResponse } from 'next/server';
import Vehicle from '../../models/Vehicle';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const vehicle = new Vehicle(body);
    await vehicle.save();
    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating vehicle', error: (error as any).message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const vehicles = await Vehicle.find();
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching vehicles', error: (error as any).message }, { status: 400 });
  }
}
