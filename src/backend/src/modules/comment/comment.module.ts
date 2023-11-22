import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { ArticleComment } from '@/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([ArticleComment])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
