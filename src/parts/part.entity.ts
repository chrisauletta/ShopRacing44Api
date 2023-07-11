import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { Customer } from "./../customer/customer.entity";
import { ImagePart } from "../ImagePart/imagePart.entity";

@Table
export class Part extends BaseEntity{

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.BIGINT,
        field: 'customer_id',
    })
    customerId:string;

    @Column({
        type: DataType.STRING(1000),
        allowNull:false,
    })
    title:string;

    @Column({
        type: DataType.STRING(1000),
        allowNull:true, 
    })
    note:string;

    @Column({
        type: DataType.DOUBLE(10,2),
        allowNull:true, 
    })
    value:string;

    @Column({
        type: DataType.ENUM('S', 'N'),
        defaultValue: 'N'
    })
    status:string;

    @BelongsTo(() => Customer)
    customer: Customer;

    @HasMany(() => ImagePart)
    imagepart: ImagePart;
}