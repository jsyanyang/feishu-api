import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Department } from "./Department";

@Index("user_id", ["userId"], {})
@Index("department_id", ["departmentId"], {})
@Entity("user_department", { schema: "app" })
export class UserDepartment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "department_id", nullable: true })
  departmentId: number | null;

  @ManyToOne(() => User, (user) => user.userDepartments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(() => Department, (department) => department.userDepartments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Department;
}
