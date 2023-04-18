import { BaseController } from './baseController'
import { Request, Response, Router } from 'express'

class HelperController extends BaseController {
  public override setup(): Router {
    this.router.get('/health', (req: Request, res: Response): void => {
      res.sendStatus(200)
    })

    return this.router
  }
}

export { HelperController }
