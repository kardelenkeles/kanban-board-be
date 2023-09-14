import { ApiProperty } from "@nestjs/swagger";

export class BoardDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

}
