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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comment_model_1 = require("./models/comment.model");
const errors_1 = require("@/common/errors");
const sequelize_2 = require("sequelize");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async createComment(dto, id) {
        await this.commentRepository.create({
            text: dto.text,
            articleId: id,
        });
        return dto;
    }
    async getComments(id) {
        return this.commentRepository.findAll({
            where: { articleId: id },
            order: [['updatedAt', 'DESC']],
        });
    }
    async getComment(articleId, commentId) {
        const comment = await this.commentRepository.findOne({
            where: { comment_id: commentId, articleId: articleId },
        });
        if (!comment)
            throw new common_1.NotFoundException(errors_1.AppError.COMMENT_NOT_FOUND);
        return comment;
    }
    async updateComment(articleId, commentId, dto) {
        await this.commentRepository.update({ text: dto.text }, { where: { articleId: articleId, comment_id: commentId } });
        return dto;
    }
    async deleteComment(articleId, commentId) {
        await this.commentRepository.destroy({
            where: { articleId: articleId, comment_id: commentId },
        });
    }
    async getAnalytic(dateFrom, dateTo) {
        const comments = await this.commentRepository.findAll({
            where: {
                createdAt: {
                    [sequelize_2.Op.gte]: new Date(+dateFrom),
                    [sequelize_2.Op.lte]: new Date(+dateTo),
                },
            },
        });
        return comments;
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comment_model_1.Comment)),
    __metadata("design:paramtypes", [Object])
], CommentService);
//# sourceMappingURL=comment.service.js.map