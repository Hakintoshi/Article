import { Controller, Query, Get } from '@nestjs/common';
import { AnalyticService } from '@/modules/analytic/analytic.service';
import { ResponseDTO } from '@/dto';

@Controller('/analytic/comments')
export class AnalyticController {
  constructor(private readonly analyticService: AnalyticService) {}
  @Get()
  // Вынести в отдельный модуль
  // Использовать ResponseDTO
  getAnalytic(
    @Query('dateFrom') dateFrom: number,
    @Query('dateTo') dateTo: number,
  ): Promise<ResponseDTO> {
    return this.analyticService.getAnalytic(dateFrom, dateTo);
  }
}
