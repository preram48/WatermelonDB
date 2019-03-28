declare module '@nozbe/watermelondb/decorators/relation' {
  import { ColumnName, TableName } from '@nozbe/watermelondb'
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'
  import { Options } from '@nozbe/watermelondb/Relation'

  const relation:  (columnName: string) => any;

  export default relation
}
