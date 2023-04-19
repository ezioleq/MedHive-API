import express, { Express } from 'express'
import { DatabaseContext } from './databaseContext'
import cors from 'cors'
import { HelperController } from './controllers/helperController'
import { ServiceProvider } from './services/serviceProvider'
import { UserService } from './services/userService'

/**
 * Application server class.
 */
class App {
  private _express: Express = express()
  private _dbContext: DatabaseContext = new DatabaseContext()
  private _serviceProvider: ServiceProvider = new ServiceProvider()

  /**
   * Setup application.
   */
  public setup(): void {
    this.setupDatabase()

    this._express.set('trust proxy', 1)
  }

  /**
   * Setup use of specified middlewares.
   */
  public useMiddlewares(): void {
    this._express.use(cors())
  }

  /**
   * Register services in the service provider.
   */
  public registerServices(): void {
    this._serviceProvider.registerService(new UserService())
  }

  /**
   * Register routes controllers.
   */
  public registerControllers(): void {
    this.addController('/helper', new HelperController(this._serviceProvider).setup())
  }

  /**
   * Start the server on the given port.
   * @param port Server listen port.
   */
  public listen(port: number): void {
    this._express.listen(port, () => {
      console.log(`Server is running on https://localhost:${port}/`)
    })
  }

  /**
   * Setup database connection.
   * @private
   */
  private setupDatabase(): void {
    this._dbContext.initialize()
  }

  private addController(root: string, router: express.Router): void {
    this._express.use(root, router)
  }
}

export { App }
