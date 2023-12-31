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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const dto_1 = require("./dto");
let ArticleController = class ArticleController {
    constructor(ArticleService) {
        this.ArticleService = ArticleService;
    }
    createArticles(dto) {
        return this.ArticleService.createArticle(dto);
    }
    findAllArticles() {
        return this.ArticleService.getAllArticles();
    }
    findOneArticle(id) {
        return this.ArticleService.getArticle(id);
    }
    updateArticle(id, dto) {
        return this.ArticleService.updateArticle(id, dto);
    }
    deleteArticle(id) {
        return this.ArticleService.deleteArticle(id);
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Post)('article'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticles", null);
__decorate([
    (0, common_1.Get)('articles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAllArticles", null);
__decorate([
    (0, common_1.Get)('article/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findOneArticle", null);
__decorate([
    (0, common_1.Patch)('article/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)('article/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticleController.prototype, "deleteArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map