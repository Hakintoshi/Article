"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticController = void 0;
const common_1 = require("@nestjs/common");
const analytic_service_1 = require("./analytic.service");
let AnalyticController = class AnalyticController {
    constructor(analyticService) {
        this.analyticService = analyticService;
    }
    getAnalytic(dateFrom, dateTo) {
        return this.analyticService.getAnalytic(dateFrom, dateTo);
    }
};
exports.AnalyticController = AnalyticController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('dateFrom')),
    __param(1, (0, common_1.Query)('dateTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AnalyticController.prototype, "getAnalytic", null);
exports.AnalyticController = AnalyticController = __decorate([
    (0, common_1.Controller)('/analytic/comments'),
    __metadata("design:paramtypes", [analytic_service_1.AnalyticService])
], AnalyticController);
//# sourceMappingURL=analytic.controller.js.map