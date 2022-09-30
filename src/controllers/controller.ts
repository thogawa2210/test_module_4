import {EmployeeModel} from "../schemas/employee.model";
import {BranchModel} from "../schemas/branch.model";
import bcrypt from 'bcrypt';
import { resolve } from "path";

class Controller {
    async showListPage(req, res){
        let employeesIT = await EmployeeModel.find({branch: 'IT'})
        let employeesCEO = await EmployeeModel.find({branch: 'CEO'})
        let employeesSe = await EmployeeModel.find({branch: 'Security'})

        res.render('list', {employeesIT:employeesIT, employeesCEO: employeesCEO, employeesSe: employeesSe });
    }

    async showCreatePage(req, res) {
        let branches = await BranchModel.find()
        res.render('create', { branches: branches});
    }

    async showDetailPage(req, res) {
        let employee = await EmployeeModel.findOne({ _id: req.params.id})
        res.render('detail', {employee:employee});
    }

    async create(req, res) {
        let employee = req.body;
        await EmployeeModel.create(employee);
        res.redirect('/list')

    }

    async showUpdate(req, res) {
        let branches = await BranchModel.find()
        let employee = await EmployeeModel.findOne({ _id: req.params.id});
        res.render('update', { employee: employee, branches: branches});
    }

    async update(req, res) {
        let newEmployee = req.body;
        await EmployeeModel.findOneAndUpdate({_id: newEmployee.id}, newEmployee);
        res.redirect('/list');
    }

    async delete(req, res) {
        await EmployeeModel.findOneAndDelete({_id: req.params.id});
        res.redirect('/list');
    }

}








const controller = new Controller();
export default controller;