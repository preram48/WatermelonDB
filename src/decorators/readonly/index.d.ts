declare module '@nozbe/watermelondb/decorators/readonly' {
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'

  const readonly: (columnName: string) => any;

  export default readonly
}
