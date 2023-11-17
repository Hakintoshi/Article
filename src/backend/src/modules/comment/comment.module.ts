import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
// import { AnalyticController } from './analytic.controller';
import { article_comment } from '@/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([article_comment])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
