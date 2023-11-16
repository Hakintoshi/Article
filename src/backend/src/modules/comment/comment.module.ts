import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { AnalyticController } from './analytic.controller';
import { Comment } from './models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment])],
  providers: [CommentService],
  controllers: [CommentController, AnalyticController],
})
export class CommentModule {}
