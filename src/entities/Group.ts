import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserGroup } from "./UserGroup";

@Entity("group", { schema: "app" })
export class Group {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "ç¾¤å",
    length: 255,
  })
  name: string | null;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.group)
  userGroups: UserGroup[];
}
