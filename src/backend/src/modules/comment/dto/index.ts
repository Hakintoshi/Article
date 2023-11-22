import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDTO {
  // Добавить id комментария
  // Добавить id статьи
  // id?: number;

  @IsNotEmpty()
  @IsString()
  text: string;
}
