import { PartialType } from "@nestjs/swagger";
import { LabelDto } from "./label.dto";

export class UpdateLabelDto extends PartialType(LabelDto){}
