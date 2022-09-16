import User from './portal/user'

export const createDataSources = () => ({
  user: new User(),
})
