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
import { CompanyUser } from "./CompanyUser";
import { Department } from "./Department";

@Index("admin_id", ["adminId"], {})
@Entity("company", { schema: "app" })
export class Company {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "company_name", nullable: true, length: 255 })
  companyName: string | null;

  @Column("int", { name: "admin_id", nullable: true })
  adminId: number | null;

  @ManyToOne(() => User, (user) => user.companies, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "admin_id", referencedColumnName: "id" }])
  admin: User;

  @OneToMany(() => CompanyUser, (companyUser) => companyUser.company)
  companyUsers: CompanyUser[];

  @OneToMany(() => Department, (department) => department.company)
  departments: Department[];
}
