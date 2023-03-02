import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    phone: string

    @Column()
    passwd: string

    @Column()
    avar: string

}
