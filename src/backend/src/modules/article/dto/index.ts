import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
class CreateArticleDTO {
  @IsString()
  title: string;

  @IsString()
  body: string;
}

class UpdateArticleDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}

export { CreateArticleDTO, UpdateArticleDTO };
