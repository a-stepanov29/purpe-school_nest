import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
  Courses,
  Servises,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class TopPageAdvantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema()
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  hh?: HhData;

  @Prop({ type: () => [TopPageAdvantages] })
  advantages: [TopPageAdvantages];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop([String])
  tags: [string];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
