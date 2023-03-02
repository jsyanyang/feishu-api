import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Company {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @Column()
    company_id: string
    @Column()
    father_department_id: string

}
