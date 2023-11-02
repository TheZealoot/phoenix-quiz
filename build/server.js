"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config({ path: `${__dirname}/config.env` });
// @ts-ignore
const Db = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose_1.default
    .connect(Db)
    .then(() => { console.log('DB connection successful'); });
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8081;
app_1.default.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
