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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const comment_model_1 = require("./comment.model");
let Article = class Article extends sequelize_typescript_1.Model {
};
exports.Article = Article;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Article.prototype, "article_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        comment: 'Заголовок статьи',
    }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        comment: 'Текст статьи',
    }),
    __metadata("design:type", String)
], Article.prototype, "body", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_model_1.ArticleComment),
    __metadata("design:type", Array)
], Article.prototype, "comments", void 0);
exports.Article = Article = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'article' })
], Article);
//# sourceMappingURL=article.model.js.map