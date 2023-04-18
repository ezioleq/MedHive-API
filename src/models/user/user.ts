import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { UserRole } from './userRole'

/**
 * User model.
 */
@Entity()
export class User {
  /**
   * Unique identifier.
   */
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  /**
   * Unique login.
   */
  @Column({ unique: true, length: 32 })
  public login!: string

  /**
   * Password hash.
   */
  @Column({ length: 1024 })
  public passwordHash!: string

  /**
   * User role.
   */
  @Column({ type: 'simple-enum', default: UserRole.Visitor })
  public role!: UserRole
}
