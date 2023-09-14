import { PartialType } from "@nestjs/swagger";
import { BoardDto } from "./board.dto";

export class UpdateBoardDto extends PartialType(BoardDto){}
