import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class UserGroup {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    user_id: string

    @Column()
    group_id: string

}
