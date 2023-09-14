import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class BoardDto {

  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  description: string;

}
