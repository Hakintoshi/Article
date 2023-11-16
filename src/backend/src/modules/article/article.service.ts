import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './models/article.model';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { AppError } from '@/common/errors';
import { where } from 'sequelize';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article) private articleRepository: typeof Article,
  ) {}

  // 1. использовать конструкцию try catch
  // 2. использовать ResponseDTO
  // 3. Использовать константы для кодов статусов и для сообщениях об ошибках и т.п.
  async createArticle(dto: CreateArticleDTO): Promise<CreateArticleDTO> {
    try {
      await this.articleRepository.create({
        title: dto.title,
        body: dto.body,
      });

      return {
        message: '',
        status: HttpStatus.ACCEPTED,
        data: null,
      };
    } catch (e) {
      // this.logger.error(`${CREATE_ARTICLE_MESSAGE_ERROR} ${e}`);
      // throw new HttpException(
      //     `${CREATE_ARTICLE_MESSAGE_ERROR} ${e}`,
      //     HttpStatus.BAD_REQUEST,
      // );
    }
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }

  // Сделать для каждого метода
  /**
   * Получение статьи по его id.
   * @param id
   */
  async getArticle(id: number): Promise<Article> {
    const article = await this.articleRepository.findOne({
      where: { article_id: id },
    });

    if (!article) {
      return {
        message: NOT_FOUND,
        status: HttpStatus.NOT_FOUND,
        data: null,
      };
    };

    return article;
  }

  // Перенести в метод createArticle
  async updateArticle(
    id: number,
    dto: UpdateArticleDTO,
  ): Promise<UpdateArticleDTO> {
    await this.articleRepository.update(
      { title: dto.title, body: dto.body },
      {returning: undefined, where: { article_id: id } },
    );
    return dto;
  }

  async deleteArticle(id: number) {
    await this.articleRepository.destroy({ where: { article_id: id } });
  }
}
