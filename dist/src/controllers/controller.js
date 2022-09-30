"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_model_1 = require("../schemas/employee.model");
const branch_model_1 = require("../schemas/branch.model");
class Controller {
    async showListPage(req, res) {
        let employeesIT = await employee_model_1.EmployeeModel.find({ branch: 'IT' });
        let employeesCEO = await employee_model_1.EmployeeModel.find({ branch: 'CEO' });
        let employeesSe = await employee_model_1.EmployeeModel.find({ branch: 'Security' });
        res.render('list', { employeesIT: employeesIT, employeesCEO: employeesCEO, employeesSe: employeesSe });
    }
    async showCreatePage(req, res) {
        let branches = await branch_model_1.BranchModel.find();
        res.render('create', { branches: branches });
    }
    async showDetailPage(req, res) {
        let employee = await employee_model_1.EmployeeModel.findOne({ _id: req.params.id });
        res.render('detail', { employee: employee });
    }
    async create(req, res) {
        let employee = req.body;
        await employee_model_1.EmployeeModel.create(employee);
        res.redirect('/list');
    }
    async showUpdate(req, res) {
        let branches = await branch_model_1.BranchModel.find();
        let employee = await employee_model_1.EmployeeModel.findOne({ _id: req.params.id });
        res.render('update', { employee: employee, branches: branches });
    }
    async update(req, res) {
        let newEmployee = req.body;
        await employee_model_1.EmployeeModel.findOneAndUpdate({ _id: newEmployee.id }, newEmployee);
        res.redirect('/list');
    }
    async delete(req, res) {
        await employee_model_1.EmployeeModel.findOneAndDelete({ _id: req.params.id });
        res.redirect('/list');
    }
}
const controller = new Controller();
exports.default = controller;
//# sourceMappingURL=controller.js.map