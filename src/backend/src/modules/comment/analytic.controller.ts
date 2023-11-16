import { Controller, Query, Get } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('/analytic/comments')
export class AnalyticController {
  constructor(private readonly CommentService: CommentService) {}
  @Get()
  // Вынести в отдельный модуль
  // Использовать ResponseDTO
  getAnalytic(
    @Query('dateFrom') dateFrom: number,
    @Query('dateTo') dateTo: number,
  ) {
    return this.CommentService.getAnalytic(dateFrom, dateTo);
  }
}
