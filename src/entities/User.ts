import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";
import { CompanyUser } from "./CompanyUser";
import { Message } from "./Message";
import { Reply } from "./Reply";
import { UserDepartment } from "./UserDepartment";
import { UserGroup } from "./UserGroup";

@Entity("user", { schema: "app" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "ç”¨æˆ·id" })
  id: number;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", { name: "passwd", nullable: true, length: 255 })
  passwd: string | null;

  @Column("varchar", {
    name: "avar",
    nullable: true,
    comment: "å¤´åƒ",
    length: 255,
  })
  avar: string | null;

  @Column("varchar", {
    name: "qrcode",
    nullable: true,
    comment: "äºŒç»´ç ",
    length: 255,
  })
  qrcode: string | null;

  @OneToMany(() => Company, (company) => company.admin)
  companies: Company[];

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.user)
  companyUsers: CompanyUser[];

  @OneToMany(() => Message, (message) => message.sender2)
  messages: Message[];

  @OneToMany(() => Reply, (reply) => reply.sender2)
  replies: Reply[];

  @OneToMany(() => UserDepartment, (userDepartment) => userDepartment.user)
  userDepartments: UserDepartment[];

  @OneToMany(() => UserGroup, (userGroup) => userGroup.user)
  userGroups: UserGroup[];
}
