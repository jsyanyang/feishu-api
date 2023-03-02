import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Message {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    created_at: string

    @Column()
    content: string
    @Column()
    sender: string
    @Column()
    reciever: string

}
