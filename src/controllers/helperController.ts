import { BaseController } from './baseController'
import { Request, Response, Router } from 'express'

/**
 * Helper controller.
 */
class HelperController extends BaseController {
  public override setup(): Router {
    // Application health test endpoint
    this.router.get('/health', (req: Request, res: Response): void => {
      res.sendStatus(200)
    })

    return this.router
  }
}

export { HelperController }
