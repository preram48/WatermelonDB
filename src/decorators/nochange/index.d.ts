declare module '@nozbe/watermelondb/decorators/nochange' {
  import { Decorator, RawDecorator } from '@nozbe/watermelondb/utils/common/makeDecorator'

  const nochange: (columnName: string) => any;

  export default nochange
}
