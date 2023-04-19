import express, { Router } from 'express'
import { ServiceProvider } from '../services/serviceProvider'

/**
 * Controller base class.
 */
abstract class BaseController {
  protected router: Router = express.Router()
  protected _serviceProvider: ServiceProvider

  /**
   * Base controller with service provider constructor.
   * @param serviceProvider Service provider.
   * @protected
   */
  protected constructor(serviceProvider: ServiceProvider) {
    this._serviceProvider = serviceProvider
  }

  /**
   * Setup controller routes.
   */
  public abstract setup(): Router
}

export { BaseController }
