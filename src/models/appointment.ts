import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Staff } from './staff'
import { Department } from './department'

/**
 * Appointment.
 */
@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Appointment type.
   */
  @Column()
  public type!: string

  /**
   * Staff.
   */
  @ManyToOne(() => Staff, (staff: Staff) => staff.appointments)
  public staff!: Staff

  /**
   * Department.
   */
  @ManyToOne(() => Department, (department: Department) => department.appointments)
  public department!: Department

  /**
   * Room number.
   */
  @Column()
  public roomNumber!: number

  /**
   * Appointment date.
   */
  @Column({ type: 'datetime' })
  public date!: Date
}
