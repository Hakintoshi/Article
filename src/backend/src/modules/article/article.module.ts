import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { article } from '@/models/article.model';

@Module({
  imports: [SequelizeModule.forFeature([article])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
