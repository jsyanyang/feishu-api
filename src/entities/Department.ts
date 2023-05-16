import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { UserDepartment } from "./UserDepartment";

@Index("company_id", ["companyId"], {})
@Index("father_department_id", ["fatherDepartmentId"], {})
@Entity("department", { schema: "app" })
export class Department {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "éƒ¨é—¨å",
    length: 255,
  })
  name: string | null;

  @Column("int", { name: "company_id", nullable: true })
  companyId: number | null;

  @Column("int", { name: "father_department_id", nullable: true })
  fatherDepartmentId: number | null;

  @ManyToOne(() => Company, (company) => company.departments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company: Company;

  @ManyToOne(() => Department, (department) => department.departments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "father_department_id", referencedColumnName: "id" }])
  fatherDepartment: Department;

  @OneToMany(() => Department, (department) => department.fatherDepartment)
  departments: Department[];

  @OneToMany(
    () => UserDepartment,
    (userDepartment) => userDepartment.department
  )
  userDepartments: UserDepartment[];
}
