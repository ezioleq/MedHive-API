import { IService } from './service'

/**
 * User service.
 */
class UserService implements IService {
  public initialize() {
    console.debug('Initializing user service')
  }
}

export { UserService }
