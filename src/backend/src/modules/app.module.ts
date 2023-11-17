import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleModule } from '@/modules/article/article.module';
import { CommentModule } from '@/modules/comment/comment.module';
import { AnalyticModule } from '@/modules/analytic/analytic.module';
import configDb from '@/../config/config.db';

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    AnalyticModule,
    SequelizeModule.forRoot(configDb),
  ],
})
export class AppModule {}
