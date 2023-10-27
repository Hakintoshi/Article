import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';
import { CommentDTO } from './dto';
import { AppError } from 'src/common/errors';
import { Op } from 'sequelize';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
  ) {}

  async createComment(dto: CommentDTO, id: number): Promise<CommentDTO> {
    await this.commentRepository.create({
      text: dto.text,
      articleId: id,
    });
    return dto;
  }

  async getComments(id: number): Promise<Comment[]> {
    return this.commentRepository.findAll({
      where: { articleId: id },
      order: [['updatedAt', 'DESC']],
    });
  }

  async getComment(articleId: number, commentId: number): Promise<Comment> {
    const comment = await this.commentRepository.findOne({
      where: { comment_id: commentId, articleId: articleId },
    });
    if (!comment) throw new NotFoundException(AppError.COMMENT_NOT_FOUND);
    return comment;
  }

  async updateComment(articleId: number, commentId: number, dto: CommentDTO) {
    await this.commentRepository.update(
      { text: dto.text },
      { where: { articleId: articleId, comment_id: commentId } },
    );
    return dto;
  }

  async deleteComment(articleId: number, commentId: number) {
    await this.commentRepository.destroy({
      where: { articleId: articleId, comment_id: commentId },
    });
  }

  async getAnalytic(dateFrom: number, dateTo: number): Promise<Comment[]> {
    const comments = await this.commentRepository.findAll({
      where: {
        createdAt: {
          [Op.gte]: new Date(+dateFrom),
          [Op.lte]: new Date(+dateTo),
        },
      },
    });
    return comments;
  }
}
