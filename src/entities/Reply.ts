import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Message } from "./Message";
import { User } from "./User";
import { Emotion } from "./Emotion";

@Index("message_id", ["messageId"], {})
@Index("sender", ["sender"], {})
@Index("emotion_id", ["emotionId"], {})
@Entity("reply", { schema: "app" })
export class Reply {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "message_id", nullable: true })
  messageId: number | null;

  @Column("int", { name: "sender", nullable: true })
  sender: number | null;

  @Column("int", { name: "emotion_id", nullable: true })
  emotionId: number | null;

  @ManyToOne(() => Message, (message) => message.replies, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "message_id", referencedColumnName: "id" }])
  message: Message;

  @ManyToOne(() => User, (user) => user.replies, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "sender", referencedColumnName: "id" }])
  sender2: User;

  @ManyToOne(() => Emotion, (emotion) => emotion.replies, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "emotion_id", referencedColumnName: "id" }])
  emotion: Emotion;
}
