import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";
import { Part } from "../parts/part.entity";

@Table
export class ImagePart extends BaseEntity{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Part)
    @Column({
        type: DataType.BIGINT,
        field: 'part_id',
    })
    partId:string;

    @Column({
        type: DataType.STRING(1000),
        allowNull:true, 
    })
    image:string;

    @Column({
        type: DataType.ENUM('S', 'N'),
        defaultValue: 'N'
    })
    main:string;

    @BelongsTo(() => Part)
    part: Part;

}