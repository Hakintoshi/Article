import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleModule } from '@/article/article.module';
import { CommentModule } from '@/comment/comment.module';
import configDb from "../../config/config.db";

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    SequelizeModule.forRoot(configDb),
  ],
})
export class AppModule {}
