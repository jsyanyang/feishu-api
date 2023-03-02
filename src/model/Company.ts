import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Company {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    company_name: string

    @Column()
    admin_id: string

}
