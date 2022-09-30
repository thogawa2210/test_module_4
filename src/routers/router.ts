import express from "express";
import controller from '../controllers/controller';
import multer from "multer";
let upload = multer();

const router = express.Router();

router.get('/list', (req, res) => {
    controller.showListPage(req, res);
});

router.get('/create', (req, res) => {
    controller.showCreatePage(req, res).catch(err => res.render('404page'));
});

router.post('/create', upload.none(),(req, res) => {
    controller.create(req, res);
})

router.get('/detail/:id', (req, res) => {
    controller.showDetailPage(req, res).catch(err => res.render('404page'));
});

router.get('/update/:id', (req, res) => {
    controller.showUpdate(req, res).catch(err => res.render('404page'));
});

router.post('/update',upload.none(), (req, res) => {
    controller.update(req, res).catch(err => res.render('404page'));
});

router.get('/delete/:id', (req, res) => {
    controller.delete(req, res).catch(err => res.render('404page'));
})


export default router;