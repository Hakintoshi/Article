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
import { ResponseDTO } from '@/dto';

@Controller()
export class ArticleController {
  // Почитать правила форматирования кода для js
  constructor(private readonly articleService: ArticleService) {}

  @Post('article')
  // Использовать другой DTO для ответа
  createArticles(@Body() dto: CreateArticleDTO): Promise<ResponseDTO> {
    return this.articleService.createArticle(dto);
  }

  @Get('articles')
  // Использовать другой DTO для ответа
  getArticles(): Promise<ResponseDTO> {
    return this.articleService.getAllArticles();
  }

  @Get('article/:id')
  getArticle(@Param('id') id: number): Promise<ResponseDTO> {
    return this.articleService.getArticle(id);
  }

  @Patch('article/:id')
  updateArticle(
    @Param('id') id: number,
    // Поменять на CreateArticleDTO
    @Body() dto: UpdateArticleDTO,
  ): Promise<ResponseDTO> {
    return this.articleService.createArticle(dto, id);
  }

  // Использовать другой DTO для ответа
  @Delete('article/:id')
  deleteArticle(@Param('id') id: number): Promise<ResponseDTO> {
    return this.articleService.deleteArticle(id);
  }
}
