import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
