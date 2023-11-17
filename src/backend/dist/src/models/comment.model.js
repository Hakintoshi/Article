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
exports.article_comment = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const article_model_1 = require("./article.model");
let article_comment = class article_comment extends sequelize_typescript_1.Model {
};
exports.article_comment = article_comment;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], article_comment.prototype, "comment_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], article_comment.prototype, "text", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => article_model_1.article),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], article_comment.prototype, "articleId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => article_model_1.article),
    __metadata("design:type", article_model_1.article)
], article_comment.prototype, "article", void 0);
exports.article_comment = article_comment = __decorate([
    sequelize_typescript_1.Table
], article_comment);
//# sourceMappingURL=comment.model.js.map