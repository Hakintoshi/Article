import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDTO {
  // Добавить id комментария
  @IsNotEmpty()
  @IsString()
  text: string;
}
