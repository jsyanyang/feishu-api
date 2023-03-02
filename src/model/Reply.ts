import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Reply {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    message_id: string

    @Column()
    sender: string
    @Column()
    emotion_id: string

}
