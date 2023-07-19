import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { Customer } from "../customer/customer.entity";
import { ImagePart } from "../ImagePart/imagePart.entity";

@Table
export class State extends BaseEntity{
    
  @Column
  nome: string;

  @Column
  uf: string;
}