import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AnalyticController } from './analytic.controller';
import { article } from '@/models/article.model';
import { AnalyticService } from './analytic.service';

@Module({
  imports: [SequelizeModule.forFeature([article])],
  providers: [AnalyticService],
  controllers: [AnalyticController],
})
export class AnalyticModule {}
