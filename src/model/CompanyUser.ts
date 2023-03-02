import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class CompanyUser {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    user_id: string

    @Column()
    company_id: string

}
