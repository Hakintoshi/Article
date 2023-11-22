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
import { CreateArticleDTO } from './dto';
import { ResponseDTO } from '@/dto';

@Controller()
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('article')
  createArticles(@Body() dto: CreateArticleDTO): Promise<ResponseDTO> {
    return this.articleService.createArticle(dto);
  }

  @Get('articles')
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
    @Body() dto: CreateArticleDTO,
  ): Promise<ResponseDTO> {
    return this.articleService.createArticle({ id, ...dto });
  }

  @Delete('article/:id')
  deleteArticle(@Param('id') id: number): Promise<ResponseDTO> {
    return this.articleService.deleteArticle(id);
  }
}
