declare module '@nozbe/watermelondb/decorators/json' {
  import { ColumnName } from '@nozbe/watermelondb'
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'

  type Sanitizer = (source: any) => any

  const json: (columnName: string) => any;

  export default json
}
