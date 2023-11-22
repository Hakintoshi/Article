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
import { ResponseDTO } from '@/dto';

@Controller('article/:id')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Post('/comment')
  createComment(
    @Param('id') articleId: number,
    @Body() dto: CommentDTO,
  ): Promise<ResponseDTO> {
    return this.commentService.createComment({ articleId, ...dto });
  }

  @Get('/comments')
  getComments(@Param('id') id: number): Promise<ResponseDTO> {
    return this.commentService.getComments(id);
  }

  @Get('/comment/:comment_id')
  getComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
  ) {
    return this.commentService.getComment(articleId, commentId);
  }

  @Patch('/comment/:comment_id')
  updateComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
    @Body() dto: CommentDTO,
  ) {
    // { id: commentId, ...dto }
    return this.commentService.createComment({ articleId, commentId, ...dto });
  }

  @Delete('/comment/:comment_id')
  deleteComment(
    @Param('comment_id') commentId: number,
    @Param('id') articleId: number,
  ) {
    return this.commentService.deleteComment(articleId, commentId);
  }
}
