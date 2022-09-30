"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModel = void 0;
const mongoose_1 = require("mongoose");
const branchSchema = new mongoose_1.Schema({
    name: String,
});
const BranchModel = (0, mongoose_1.model)('Branch', branchSchema);
exports.BranchModel = BranchModel;
//# sourceMappingURL=branch.model.js.map