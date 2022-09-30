import { Schema, model } from "mongoose";

interface IEmployee {
    code: string,
    name: string,
    employeeId: string,
    age: number,
    branch: string,
    salary: number
}

const employeeSchema = new Schema<IEmployee>({
    code: String,
    name: String,
    employeeId: String,
    age: Number,
    branch: String,
    salary: String
})

const EmployeeModel = model<IEmployee>('Employee', employeeSchema);

export { EmployeeModel };