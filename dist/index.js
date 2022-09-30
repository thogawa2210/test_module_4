"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./src/routers/router"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const DB_URL = 'mongodb://localhost:27017';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err.message));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', router_1.default);
app.get('/*', (req, res) => {
    res.render('404page');
});
app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map