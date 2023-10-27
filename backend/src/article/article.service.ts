import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './models/article.model';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { AppError } from 'src/common/errors';
import { where } from 'sequelize';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article) private articleRepository: typeof Article,
  ) {}

  async createArticle(dto: CreateArticleDTO): Promise<CreateArticleDTO> {
    await this.articleRepository.create({
      title: dto.title,
      body: dto.body,
    });
    return dto;
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }

  async getArticle(id: number): Promise<Article> {
    const article = await this.articleRepository.findOne({
      where: { article_id: id },
    });
    if (!article) throw new NotFoundException(AppError.ARTICLE_NOT_FOUND);
    return article;
  }

  async updateArticle(
    id: number,
    dto: UpdateArticleDTO,
  ): Promise<UpdateArticleDTO> {
    await this.articleRepository.update(
      { title: dto.title, body: dto.body },
      { where: { article_id: id } },
    );
    return dto;
  }

  async deleteArticle(id: number) {
    await this.articleRepository.destroy({ where: { article_id: id } });
  }
}
