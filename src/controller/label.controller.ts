import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { LabelService } from "../service/label.service";
import { LabelDto } from "../dto/label.dto";
import { UpdateLabelDto } from "../dto/updateLabel.dto";

@Controller("categories")
export class LabelController {
  constructor(private service: LabelService) {
  }

  @Get()
  getAll() {
    return this.service.getLabels();
  }

  @Post()
  async create(@Body() categoryDto: LabelDto) {
    return this.service.addLabel(categoryDto);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: Partial<UpdateLabelDto>) {
    await this.service.updateLabel(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Label updated successfully'
    };
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    const label = await this.service.deleteLabel(id);
    return label;

  }

}
