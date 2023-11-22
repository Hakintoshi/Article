import { HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { article } from '@/models/article.model';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { message } from '@/modules/article/const';
import { ResponseDTO } from '@/dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(article) private articleRepository: typeof article,
  ) {}

  private readonly logger = new Logger(ArticleService.name);

  // 1. использовать конструкцию try catch
  // 2. использовать ResponseDTO
  // 3. Использовать константы для кодов статусов и для сообщениях об ошибках и т.п.
  /**
   * Создание или обновление статьи, при передаче параметра id будет выполнено обновление
   * @param dto
   * @param articleId
   */
  async createArticle(
    dto: CreateArticleDTO | UpdateArticleDTO,
    articleId?: number,
  ): Promise<ResponseDTO> {
    try {
      const saveData = {
        title: dto.title,
        body: dto.body,
      };

      if (articleId) {
        await this.articleRepository.update(
            saveData,
          { returning: undefined, where: { article_id: articleId } },
        );
        return {
          message: message.SUCCESS_UPDATE_ARTICLE,
          status: HttpStatus.OK,
          data: null,
        };
      }

      await this.articleRepository.create(saveData);

      return {
        message: message.SUCCESS_CREATE_ARTICLE,
        // Заменить на created
        status: HttpStatus.OK,
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

  // Сделать для каждого метода
  /**
   * Получение статьи по его id.
   * @param id
   */
  async getArticle(id: number): Promise<ResponseDTO> {
    try {
      const article = await this.articleRepository.findOne({
        rejectOnEmpty: undefined,
        where: { article_id: id }
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

  // Перенести в метод createArticle

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
