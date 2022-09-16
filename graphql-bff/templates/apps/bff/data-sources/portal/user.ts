import {
  RESTDataSource
} from 'apollo-datasource-rest'

class User extends RESTDataSource {
  all() {
    return [
      { name: 'Paulo', age: 30 },
      { name: 'Maria', age: 27 },
      { name: 'Ana', age: 40}
    ]
  }
}

export default User
