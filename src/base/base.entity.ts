//import { Model } from "sequelize";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey } from "sequelize-typescript";

export class BaseEntity extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Column({
        type: DataType.DATE,
        allowNull:true,
        field:"usuinc_dt"
    })
    usuincDt:string;

    @Column({
        type: DataType.DATE,
        allowNull:true,
        field:"usualt_dt"
    })
    usualtDt:string;
}