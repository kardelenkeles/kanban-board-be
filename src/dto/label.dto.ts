import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class LabelDto {

  @ApiProperty()
  @IsOptional()
  categoryName: string;


}
