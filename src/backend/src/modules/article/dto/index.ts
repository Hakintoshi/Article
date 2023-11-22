import { IsNotEmpty, IsString } from 'class-validator';
class CreateArticleDTO {
  // id?: number
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
