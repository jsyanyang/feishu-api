import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Emotion {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    image: string

}
