import { ModelCtor, Sequelize } from "sequelize-typescript";
import { BoardEntity } from "../board.entity/board.entity";
import { ConfigService } from "@nestjs/config";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",

    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.get('database'));

      sequelize.addModels([BoardEntity]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService]
  }
];

