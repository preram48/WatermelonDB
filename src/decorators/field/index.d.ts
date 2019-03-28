declare module '@nozbe/watermelondb/decorators/field' {
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'
  import { ColumnName } from '@nozbe/watermelondb'

  //const field: Decorator<[ColumnName], (columnName: ColumnName) => RawDecorator>
  const field: (columnName: string) => any;
  export default field;
}
