"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ["http://localhost:5173"], credentials: true }));
// routes
// app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send("Server is running!");
});
// Not found (404) route
exports.default = app;
