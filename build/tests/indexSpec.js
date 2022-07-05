"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var newFunc_1 = __importDefault(require("./../utilitis/newFunc"));
it('expect myFunc(5) to equal 25', function () {
    expect(5).toEqual(5);
});
it('expect return x * 4 ', function () {
    expect((0, newFunc_1.default)(4)).toEqual(16);
});
