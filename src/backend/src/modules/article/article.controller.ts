import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDTO, UpdateArticleDTO } from './dto';
import { Article } from './models/article.model';

@Controller()
export class ArticleController {
  // Почитать правила форматирования кода для js
  constructor(private readonly articleService: ArticleService) {}

  @Post('article')
  // Использовать другой DTO для ответа
  createArticles(@Body() dto: CreateArticleDTO): Promise<CreateArticleDTO> {
    return this.articleService.createArticle(dto);
  }

  @Get('articles')
  // Использовать другой DTO для ответа
  findAllArticles(): Promise<Article[]> {
    return this.articleService.getAllArticles();
  }

  @Get('article/:id')
  findOneArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticle(id);
  }

  @Patch('article/:id')
  updateArticle(
    @Param('id') id: number,
    @Body() dto: UpdateArticleDTO,
  ): Promise<UpdateArticleDTO> {
    return this.articleService.updateArticle(id, dto);
  }

  // Использовать другой DTO для ответа
  @Delete('article/:id')
  deleteArticle(@Param('id') id: number) {
    return this.articleService.deleteArticle(id);
  }
}
