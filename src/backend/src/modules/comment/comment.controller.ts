import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDTO } from './dto';
import { Comment } from './models/comment.model';

@Controller('article/:id')
export class CommentController {
  constructor(private readonly CommentService: CommentService) {}
  // Замечания аналогичные модулю articles
  @Post('/comment')
  createComment(
    @Param('id') id: number,
    @Body() dto: CommentDTO,
  ): Promise<CommentDTO> {
    return this.CommentService.createComment(dto, id);
  }

  @Get('/comments')
  getComments(@Param('id') id: number): Promise<Comment[]> {
    return this.CommentService.getComments(id);
  }

  @Get('/comment/:comment_id')
  getComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
  ) {
    return this.CommentService.getComment(articleId, commentId);
  }

  @Patch('/comment/:comment_id')
  updateComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
    @Body() dto: CommentDTO,
  ) {
    return this.CommentService.updateComment(articleId, commentId, dto);
  }

  @Delete('/comment/:comment_id')
  deleteComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
  ) {
    return this.CommentService.deleteComment(articleId, commentId);
  }
}
