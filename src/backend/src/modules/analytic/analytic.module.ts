import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AnalyticController } from './analytic.controller';
import { Article } from '@/models/article.model';
import { AnalyticService } from './analytic.service';

@Module({
  imports: [SequelizeModule.forFeature([Article])],
  providers: [AnalyticService],
  controllers: [AnalyticController],
})
export class AnalyticModule {}
