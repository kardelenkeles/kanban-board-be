import { ModelCtor, Sequelize } from "sequelize-typescript";
import { BoardEntity } from "../entity/board.entity";
import { ConfigService } from "@nestjs/config";
import { TaskEntity } from "../entity/task.entity";
import { CategoryEntity } from "../entity/category.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",

    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.get('database'));

      sequelize.addModels([BoardEntity, TaskEntity, CategoryEntity]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService]
  }
];

