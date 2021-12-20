"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw = void 0;
const chalk_1 = __importDefault(require("chalk"));
/**
 * Coloring display value based on Lighthouse score.
 *
 * - 0 to 0.49 (red): Poor
 * - 0.5 to 0.89 (orange): Needs Improvement
 * - 0.9 to 1 (green): Good
 */
function draw(score, value) {
    if (score >= 0.9 && score <= 1) {
        return chalk_1.default.green(`${value} (Good)`);
    }
    if (score >= 0.5 && score < 0.9) {
        return chalk_1.default.yellow(`${value} (Needs Improvement)`);
    }
    return chalk_1.default.red(`${value} (Poor)`);
}
exports.draw = draw;
