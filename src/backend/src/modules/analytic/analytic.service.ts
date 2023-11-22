import { HttpException, Injectable, Logger, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticleComment } from '@/models/comment.model';
import { ResponseDTO } from '@/dto';
import { Op } from 'sequelize';
import { Article } from '@/models/article.model';
import { message } from '@/modules/analytic/const';

@Injectable()
export class AnalyticService {
  constructor(
    @InjectModel(Article)
    private articleRepository: typeof Article,
  ) {}

  private readonly logger = new Logger(AnalyticService.name);

  /**
   * Получение аналитики комментариев по статьям за определенный период времени
   * @param dateFrom
   * @param dateTo
   */
  async getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO> {
    try {
      const comments = await this.articleRepository.findAll({
        include: {
          model: ArticleComment,
          where: {
            createdAt: {
              [Op.gte]: new Date(+dateFrom),
              [Op.lte]: new Date(+dateTo),
            },
          },
        },
      });

      return {
        message: message.SUCCESS_GET_ANALYTIC,
        status: HttpStatus.OK,
        data: comments,
      };
    } catch (e) {
      this.logger.error(message.ERROR_GET_ANALYTIC);
      throw new HttpException(
        `${message.ERROR_GET_ANALYTIC} ${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
