import { Inject, Injectable } from "@nestjs/common";
import { LabelEntity } from "../entity/label.entity";
import { TaskDto } from "../dto/task.dto";
import { TaskEntity } from "../entity/task.entity";
import { LabelDto } from "../dto/label.dto";
import { UpdateTaskDto } from "../dto/updateTask.dto";
import { UpdateLabelDto } from "../dto/updateLabel.dto";

@Injectable()
export class LabelService {

  constructor(
    @Inject("LABEL_REPOSITORY")
    private categoryRepository: typeof LabelEntity
  ) {
  }

  async getLabels(): Promise<LabelEntity[]> {
    return await this.categoryRepository.findAll<LabelEntity>();
  }

  async addLabel(categoryDto: LabelDto): Promise<LabelEntity> {
    return this.categoryRepository.create({
      categoryName: categoryDto.categoryName
    });
  }

  async deleteLabel(id: number): Promise<any> {
    await this.categoryRepository.destroy({ where: { id } });
  }

  async updateLabel(id: number, data: Partial<UpdateLabelDto>) {
    const existingCategory = await this.categoryRepository.findOne({ where: { id } });
    if (!existingCategory) {
      throw new Error("Category not found");
    }
    return await this.categoryRepository.update(data, { where: { id } });
  }


}
