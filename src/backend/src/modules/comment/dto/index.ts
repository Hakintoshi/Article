import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDTO {
  articleId?: number;

  commentId?: number;

  @IsNotEmpty()
  @IsString()
  text: string;
}
