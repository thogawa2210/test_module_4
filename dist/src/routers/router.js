"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controllers/controller"));
const multer_1 = __importDefault(require("multer"));
let upload = (0, multer_1.default)();
const router = express_1.default.Router();
router.get('/list', (req, res) => {
    controller_1.default.showListPage(req, res);
});
router.get('/create', (req, res) => {
    controller_1.default.showCreatePage(req, res).catch(err => res.render('404page'));
});
router.post('/create', upload.none(), (req, res) => {
    controller_1.default.create(req, res);
});
router.get('/detail/:id', (req, res) => {
    controller_1.default.showDetailPage(req, res).catch(err => res.render('404page'));
});
router.get('/update/:id', (req, res) => {
    controller_1.default.showUpdate(req, res).catch(err => res.render('404page'));
});
router.post('/update', upload.none(), (req, res) => {
    controller_1.default.update(req, res).catch(err => res.render('404page'));
});
router.get('/delete/:id', (req, res) => {
    controller_1.default.delete(req, res).catch(err => res.render('404page'));
});
exports.default = router;
//# sourceMappingURL=router.js.map