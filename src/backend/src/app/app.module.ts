import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleModule } from 'src/article/article.module';
import { CommentModule } from 'src/comment/comment.module';
import configDb from "../../config/config.db";

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    SequelizeModule.forRoot(configDb),
  ],
})
export class AppModule {}
