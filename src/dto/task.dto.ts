import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class TaskDto {

  @ApiProperty()
  @IsOptional()
  header: string;

  @ApiProperty()
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsOptional()
  label: string;

  @ApiProperty()
  @IsOptional()
  status: string;

}
