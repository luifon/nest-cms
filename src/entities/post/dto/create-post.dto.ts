import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsEmail()
  title: string;

  @IsNotEmpty()
  @MinLength(6)
  content: string;
}
