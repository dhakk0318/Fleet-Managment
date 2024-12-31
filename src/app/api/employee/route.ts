import Employee from '../../models/Employee';
import connectDB from '../../lib/db';
import bcrypt from 'bcryptjs';

const connectToDatabase = async () => {
  await connectDB();
};

// **GET**: Fetch all employees
export async function GET(req: Request) {
  await connectToDatabase();
  try {
    const employees = await Employee.find();
    return new Response(JSON.stringify(employees), { status: 200 });
  } catch (error) {
    return new Response('Error fetching employees', { status: 500 });
  }
}

// **POST**: Create a new employee
export async function POST(req: Request) {
  await connectToDatabase();
  const { employeeCode, fullName, email, password, department, role } = await req.json();

  try {
    // Hash password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newEmployee = new Employee({
      employeeCode,
      fullName,
      email,
      password: hashedPassword, // Store hashed password
      department,
      role,
    });

    await newEmployee.save();
    return new Response(JSON.stringify(newEmployee), { status: 201 });
  } catch (error) {
    console.error('Error creating employee:', error);
    return new Response('Error creating employee', { status: 500 });
  }
}

// **PUT**: Update employee details
export async function PUT(req: Request) {
  await connectToDatabase();
  const { employeeCode, fullName, email, department, role } = await req.json();

  try {
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeCode },
      { fullName, email, department, role },
      { new: true }
    );

    if (!updatedEmployee) {
      return new Response('Employee not found', { status: 404 });
    }
    return new Response(JSON.stringify(updatedEmployee), { status: 200 });
  } catch (error) {
    return new Response('Error updating employee', { status: 500 });
  }
}

// **DELETE**: Delete an employee
export async function DELETE(req: Request) {
  await connectToDatabase();
  const { employeeCode } = await req.json();

  try {
    const deletedEmployee = await Employee.findOneAndDelete({ employeeCode });

    if (!deletedEmployee) {
      return new Response('Employee not found', { status: 404 });
    }
    return new Response('Employee deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Error deleting employee', { status: 500 });
  }
}
