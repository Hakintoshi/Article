import { IsNotEmpty, IsString } from 'class-validator';

export class CommentDTO {
  @IsNotEmpty()
  @IsString()
  text: string;
}
