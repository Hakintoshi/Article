import { HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from '@/models/article.model';
import { CreateArticleDTO } from './dto';
import { message } from '@/modules/article/const';
import { ResponseDTO } from '@/dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article) private articleRepository: typeof Article,
  ) {}

  private readonly logger = new Logger(ArticleService.name);

  /**
   * Создание или обновление статьи, при передаче id в dto будет выполнено обновление
   * @param dto
   */
  async createArticle(dto: CreateArticleDTO): Promise<ResponseDTO> {
    try {
      const saveData = {
        title: dto.title,
        body: dto.body,
      };

      if (dto.id) {
        await this.articleRepository.update(saveData, {
          returning: undefined,
          where: { article_id: dto.id },
        });
        return {
          message: message.SUCCESS_UPDATE_ARTICLE,
          status: HttpStatus.OK,
          data: null,
        };
      }

      await this.articleRepository.create(saveData);

      return {
        message: message.SUCCESS_CREATE_ARTICLE,
        status: HttpStatus.CREATED,
        data: null,
      };
    } catch (e) {
      this.logger.error(`${message.ERROR_CREATE_ARTICLE} ${e}`);
      throw new HttpException(
        `${message.ERROR_CREATE_ARTICLE} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Получение всех статьей
   */
  async getAllArticles(): Promise<ResponseDTO> {
    try {
      const articles = await this.articleRepository.findAll();
      return {
        message: message.SUCCESS_GET_ARTICLES,
        status: HttpStatus.OK,
        data: articles,
      };
    } catch (e) {
      this.logger.error(message.ERROR_GET_ARTICLES);
      throw new HttpException(
        `${message.ERROR_GET_ARTICLES} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Получение статьи по его id.
   * @param id
   */
  async getArticle(id: number): Promise<ResponseDTO> {
    try {
      const article = await this.articleRepository.findOne({
        rejectOnEmpty: undefined,
        where: { article_id: id },
      });

      if (!article) {
        return {
          message: message.ARTICLE_NOT_FOUND,
          status: HttpStatus.NOT_FOUND,
          data: null,
        };
      }

      return {
        message: message.SUCCESS_GET_ARTICLE,
        status: HttpStatus.OK,
        data: article,
      };
    } catch (e) {
      this.logger.error(message.ERROR_GET_ARTICLE);
      throw new HttpException(
        `${message.ERROR_GET_ARTICLE} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * Удаление статьи
   * @param id
   */
  async deleteArticle(id: number): Promise<ResponseDTO> {
    try {
      await this.articleRepository.destroy({ where: { article_id: id } });

      return {
        message: message.SUCCESS_DELETE_ARTICLE,
        status: HttpStatus.OK,
        data: null,
      };
    } catch (e) {
      this.logger.error(message.ERROR_DELETE_ARTICLE);
      throw new HttpException(
        `${message.ERROR_DELETE_ARTICLE} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
