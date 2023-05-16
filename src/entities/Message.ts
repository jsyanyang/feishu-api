import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Reply } from "./Reply";

@Index("sender", ["sender"], {})
@Entity("message", { schema: "app" })
export class Message {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("varchar", {
    name: "content",
    nullable: true,
    comment: "èŠå¤©å†…å®¹",
    length: 255,
  })
  content: string | null;

  @Column("int", { name: "sender", nullable: true })
  sender: number | null;

  @Column("int", {
    name: "reciever",
    nullable: true,
    comment: "æŽ¥å—è€…ï¼Œç”¨æˆ·idæˆ–è€…ç¾¤id",
  })
  reciever: number | null;

  @ManyToOne(() => User, (user) => user.messages, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sender", referencedColumnName: "id" }])
  sender2: User;

  @OneToMany(() => Reply, (reply) => reply.message)
  replies: Reply[];
}
