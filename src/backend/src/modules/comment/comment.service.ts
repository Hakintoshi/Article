import { HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticleComment } from '@/models/comment.model';
import { CommentDTO } from './dto';
import { ResponseDTO } from '@/dto';
import { message } from '@/modules/comment/const';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(ArticleComment)
    private commentRepository: typeof ArticleComment,
  ) {}

  private readonly logger = new Logger(CommentService.name);

  /**
   * Создание или обновление комментария, при передаче параметра commentId, комментарий будет обновлен
   * @param dto
   */
  async createComment(dto: CommentDTO): Promise<ResponseDTO> {
    try {
      if (dto.commentId) {
        await this.commentRepository.update(
          { text: dto.text },
          {
            returning: undefined,
            where: { articleId: dto.articleId, comment_id: dto.commentId },
          },
        );

        return {
          message: message.SUCCESS_UPDATE_COMMENT,
          status: HttpStatus.OK,
          data: null,
        };
      }
      await this.commentRepository.create({
        text: dto.text,
        articleId: dto.articleId,
      });

      return {
        message: message.SUCCESS_CREATE_COMMENT,
        status: HttpStatus.CREATED,
        data: null,
      };
    } catch (e) {
      this.logger.error(message.ERROR_CREATE_COMMENT);
      throw new HttpException(
        `${message.ERROR_CREATE_COMMENT} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Получение всех комментариев
   * @param id
   */
  async getComments(id: number): Promise<ResponseDTO> {
    try {
      const comments = await this.commentRepository.findAll({
        where: { articleId: id },
        order: [['updatedAt', 'DESC']],
      });

      return {
        message: message.SUCCESS_GET_COMMENTS,
        status: HttpStatus.OK,
        data: comments,
      };
    } catch (e) {
      this.logger.error(message.ERROR_GET_COMMENTS);
      throw new HttpException(
        `${message.ERROR_GET_COMMENTS} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Получение одного комментария по id статьи и id комментария
   * @param articleId
   * @param commentId
   */
  async getComment(articleId: number, commentId: number): Promise<ResponseDTO> {
    try {
      const comment = await this.commentRepository.findOne({
        rejectOnEmpty: undefined,
        where: { comment_id: commentId, articleId: articleId },
      });

      if (!comment) {
        return {
          message: message.COMMENT_NOT_FOUND,
          status: HttpStatus.NOT_FOUND,
          data: null,
        };
      }

      return {
        message: message.SUCCESS_CREATE_COMMENT,
        status: HttpStatus.OK,
        data: comment,
      };
    } catch (e) {
      this.logger.error(message.ERROR_GET_COMMENT);
      throw new HttpException(
        `${message.ERROR_GET_COMMENT} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Удаление статьи
   * @param articleId
   * @param commentId
   */
  async deleteComment(
    articleId: number,
    commentId: number,
  ): Promise<ResponseDTO> {
    try {
      await this.commentRepository.destroy({
        where: { articleId: articleId, comment_id: commentId },
      });

      return {
        message: message.SUCCESS_DELETE_COMMENT,
        status: HttpStatus.OK,
        data: null,
      };
    } catch (e) {
      this.logger.error(message.ERROR_DELETE_COMMENT);
      throw new HttpException(
        `${message.ERROR_DELETE_COMMENT} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
