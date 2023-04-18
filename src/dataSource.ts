import { DataSource } from 'typeorm'

const AppDataSource: DataSource = new DataSource({
  type: 'sqlite',
  database: 'medhive.sqlite',
  synchronize: true,
  entities: [],
  migrations: [],
})

export { AppDataSource }
