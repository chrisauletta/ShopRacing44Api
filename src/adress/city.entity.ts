import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { ImagePart } from "../ImagePart/imagePart.entity";
import { State } from "./state.entity";

@Table
export class City extends BaseEntity{

  @ForeignKey(() => State)
  @Column({
      type: DataType.BIGINT,
      field: 'state_id',
  })
  stateId:string;

  @Column
  nome: string;

  @BelongsTo(() => State)
  customer: State;
}