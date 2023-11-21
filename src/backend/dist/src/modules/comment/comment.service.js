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
var CommentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comment_model_1 = require("../../models/comment.model");
const index_1 = require("./const/index");
const httpStatus_1 = require("../../const/httpStatus");
let CommentService = CommentService_1 = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
        this.logger = new common_1.Logger(CommentService_1.name);
    }
    async createComment(dto, articleId, commentId) {
        try {
            if (commentId) {
                await this.commentRepository.update({ text: dto.text }, { where: { articleId: articleId, comment_id: commentId } });
                return {
                    message: index_1.message.SUCCESS_UPDATE_COMMENT,
                    status: httpStatus_1.HttpStatus.OK,
                    data: null,
                };
            }
            await this.commentRepository.create({
                text: dto.text,
                articleId: articleId,
            });
            return {
                message: index_1.message.SUCCESS_CREATE_COMMENT,
                status: httpStatus_1.HttpStatus.OK,
                data: null,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_CREATE_COMMENT);
            throw new common_1.HttpException(`${index_1.message.ERROR_CREATE_COMMENT} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getComments(id) {
        try {
            const comments = await this.commentRepository.findAll({
                where: { articleId: id },
                order: [['updatedAt', 'DESC']],
            });
            return {
                message: index_1.message.SUCCESS_GET_COMMENTS,
                status: httpStatus_1.HttpStatus.OK,
                data: comments,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_GET_COMMENTS);
            throw new common_1.HttpException(`${index_1.message.ERROR_GET_COMMENTS} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getComment(articleId, commentId) {
        try {
            const comment = await this.commentRepository.findOne({
                where: { comment_id: commentId, articleId: articleId },
            });
            if (!comment) {
                return {
                    message: index_1.message.COMMENT_NOT_FOUND,
                    status: httpStatus_1.HttpStatus.NOT_FOUND,
                    data: null,
                };
            }
            return {
                message: index_1.message.SUCCESS_CREATE_COMMENT,
                status: httpStatus_1.HttpStatus.OK,
                data: comment,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_GET_COMMENT);
            throw new common_1.HttpException(`${index_1.message.ERROR_GET_COMMENT} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteComment(articleId, commentId) {
        try {
            await this.commentRepository.destroy({
                where: { articleId: articleId, comment_id: commentId },
            });
            return {
                message: index_1.message.SUCCESS_DELETE_COMMENT,
                status: httpStatus_1.HttpStatus.OK,
                data: null,
            };
        }
        catch (e) {
            this.logger.error(index_1.message.ERROR_DELETE_COMMENT);
            throw new common_1.HttpException(`${index_1.message.ERROR_DELETE_COMMENT} ${e}`, httpStatus_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = CommentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comment_model_1.article_comment)),
    __metadata("design:paramtypes", [Object])
], CommentService);
//# sourceMappingURL=comment.service.js.map