import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AnalyticController } from './analytic.controller';
import { article_comment } from '@/models/comment.model';
import { AnalyticService } from './analytic.service';

@Module({
  imports: [SequelizeModule.forFeature([article_comment])],
  providers: [AnalyticService],
  controllers: [AnalyticController],
})
export class AnalyticModule {}
