// @flow
import Query from '.'

export default class RawQuery extends Query {
  sql = ''

  constructor(collection, sql) {
    super(collection, [])
    this.sql = sql
  }

  fetch() {
    return this.collection.fetchRawQuery(this)
  }
}