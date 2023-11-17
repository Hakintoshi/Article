import { AnalyticService } from '@/modules/analytic/analytic.service';
import { ResponseDTO } from '@/dto';
export declare class AnalyticController {
    private readonly analyticService;
    constructor(analyticService: AnalyticService);
    getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO>;
}
