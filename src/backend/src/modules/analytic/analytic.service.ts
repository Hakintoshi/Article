import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { article_comment } from '@/models/comment.model';
import { ResponseDTO } from '@/dto/index';
import { HttpStatus } from '@/const/httpStatus';
import { Op } from 'sequelize';
import { article } from '@/models/article.model';
import { message } from '@/modules/analytic/const';

@Injectable()
export class AnalyticService {
  constructor(
    @InjectModel(article)
    private articleRepository: typeof article,
  ) {}

  private readonly logger = new Logger(AnalyticService.name);

  // Вынести в модуль аналитики
  // Сделать группировку по статьям здесь, используя includes в sequielze
  /**
   * Получение аналитики комментариев по статьям за определенный период времени
   * @param dateFrom
   * @param dateTo
   */
  async getAnalytic(dateFrom: number, dateTo: number): Promise<ResponseDTO> {
    //Убрать логи
    console.log(dateFrom, dateTo);
    console.log(new Date(+dateFrom), new Date(+dateTo));
    try {
      const comments = await this.articleRepository.findAll({
        include: {
          model: article_comment,
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
