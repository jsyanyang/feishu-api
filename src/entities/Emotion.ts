import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reply } from "./Reply";

@Entity("emotion", { schema: "app" })
export class Emotion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @OneToMany(() => Reply, (reply) => reply.emotion)
  replies: Reply[];
}
