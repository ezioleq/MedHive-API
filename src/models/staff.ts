import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Department } from './department'
import { Appointment } from './appointment'

/**
 * Staff account details.
 */
@Entity()
export class Staff {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Department.
   */
  @ManyToOne(() => Department, (department: Department) => department.staff)
  public department!: Department

  /**
   * Appointments.
   */
  @OneToMany(() => Appointment, (appointment: Appointment) => appointment.staff)
  public appointments!: Appointment[]
}
