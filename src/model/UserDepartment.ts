import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class UserDepartment {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    user_id: string

    @Column()
    department_id: string

}
