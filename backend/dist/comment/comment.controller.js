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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const dto_1 = require("./dto");
let CommentController = class CommentController {
    constructor(CommentService) {
        this.CommentService = CommentService;
    }
    createComment(id, dto) {
        return this.CommentService.createComment(dto, id);
    }
    getComments(id) {
        return this.CommentService.getComments(id);
    }
    getComment(commentId, articleId) {
        return this.CommentService.getComment(articleId, commentId);
    }
    updateComment(commentId, articleId, dto) {
        return this.CommentService.updateComment(articleId, commentId, dto);
    }
    deleteComment(commentId, articleId) {
        return this.CommentService.deleteComment(articleId, commentId);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)('/comment'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)('/comments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComments", null);
__decorate([
    (0, common_1.Get)('/comment/:comment_id'),
    __param(0, (0, common_1.Param)('comment_id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "getComment", null);
__decorate([
    (0, common_1.Patch)('/comment/:comment_id'),
    __param(0, (0, common_1.Param)('comment_id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, dto_1.CommentDTO]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)('/comment/:comment_id'),
    __param(0, (0, common_1.Param)('comment_id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "deleteComment", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('article/:id'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map