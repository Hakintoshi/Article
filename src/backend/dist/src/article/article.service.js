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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const article_model_1 = require("./models/article.model");
const errors_1 = require("../common/errors");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async createArticle(dto) {
        await this.articleRepository.create({
            title: dto.title,
            body: dto.body,
        });
        return dto;
    }
    async getAllArticles() {
        return this.articleRepository.findAll();
    }
    async getArticle(id) {
        const article = await this.articleRepository.findOne({
            where: { article_id: id },
        });
        if (!article)
            throw new common_1.NotFoundException(errors_1.AppError.ARTICLE_NOT_FOUND);
        return article;
    }
    async updateArticle(id, dto) {
        await this.articleRepository.update({ title: dto.title, body: dto.body }, { where: { article_id: id } });
        return dto;
    }
    async deleteArticle(id) {
        await this.articleRepository.destroy({ where: { article_id: id } });
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(article_model_1.Article)),
    __metadata("design:paramtypes", [Object])
], ArticleService);
//# sourceMappingURL=article.service.js.map