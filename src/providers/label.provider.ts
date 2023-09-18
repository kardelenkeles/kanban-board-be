import { LabelEntity } from "../entity/label.entity";

export const labelProvider = [
  {
    provide: 'LABEL_REPOSITORY',
    useValue: LabelEntity,
  },
];
