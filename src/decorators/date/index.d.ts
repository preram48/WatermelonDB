declare module '@nozbe/watermelondb/decorators/date' {
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'
  import { ColumnName } from '@nozbe/watermelondb'

  const date: (columnName: string) => any
  export default date
}
