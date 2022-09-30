import { Schema, model } from "mongoose";

interface IBranch {
    name: string,
}

const branchSchema = new Schema<IBranch>({
    name: String,
})

const BranchModel = model<IBranch>('Branch', branchSchema);

export { BranchModel };