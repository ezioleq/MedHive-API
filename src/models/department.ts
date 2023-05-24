import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Staff } from './staff'
import { Appointment } from './appointment'

/**
 * Single department.
 */
@Entity()
export class Department {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Name.
   */
  @Column({ nullable: false })
  public name!: string

  /**
   * Type.
   */
  @Column({ nullable: false })
  public type!: string

  /**
   * Staff.
   */
  @OneToMany(() => Staff, (staff: Staff) => staff.department)
  public staff!: Staff[]

  /**
   * Appointments.
   */
  @OneToMany(() => Appointment, (appointments: Appointment) => appointments.department)
  public appointments!: Appointment[]
}
