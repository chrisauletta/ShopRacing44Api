 import { Exclude, Expose } from "class-transformer";
// import { IsNotEmpty } from "class-validator";
//import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BaseEntity } from "../base/base.entity";


@Table
export class Customer extends BaseEntity{

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    name:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    document:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false, 
    })
    cell:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    telephone:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    email:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    city:string;

    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    state:string;

    
    @Column({
        type: DataType.STRING(60),
        allowNull:true, 
    })
    note:string;


}