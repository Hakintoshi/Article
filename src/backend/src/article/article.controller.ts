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
  constructor(private readonly ArticleService: ArticleService) {}

  @Post('article')
  createArticles(@Body() dto: CreateArticleDTO): Promise<CreateArticleDTO> {
    return this.ArticleService.createArticle(dto);
  }

  @Get('articles')
  findAllArticles(): Promise<Article[]> {
    return this.ArticleService.getAllArticles();
  }

  @Get('article/:id')
  findOneArticle(@Param('id') id: number): Promise<Article> {
    return this.ArticleService.getArticle(id);
  }

  @Patch('article/:id')
  updateArticle(
    @Param('id') id: number,
    @Body() dto: UpdateArticleDTO,
  ): Promise<UpdateArticleDTO> {
    return this.ArticleService.updateArticle(id, dto);
  }

  @Delete('article/:id')
  deleteArticle(@Param('id') id: number) {
    return this.ArticleService.deleteArticle(id);
  }
}
