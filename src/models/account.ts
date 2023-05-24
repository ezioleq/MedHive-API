import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/**
 * User account.
 */
@Entity()
export class Account {
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
  @Column({ length: 4096 })
  public passwordHash!: string

  /**
   * Whether account is owned by person from stuff.
   */
  @Column({ nullable: false, default: false })
  public isStaff!: boolean
}
