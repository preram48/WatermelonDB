declare module '@nozbe/watermelondb/Model' {
  import { ColumnName, TableName, Collection } from '@nozbe/watermelondb'
  import { Observable } from 'rxjs'

  export type RecordId = string

  export type SyncStatus = 'synced' | 'created' | 'updated' | 'deleted'

  export interface BelongsToAssociation {
    type: 'belongs_to'
    key: ColumnName
  }
  export interface HasManyAssociation {
    type: 'has_many'
    foreignKey: ColumnName
  }
  export type AssociationInfo = BelongsToAssociation | HasManyAssociation
  export interface Associations {
    [tableName: string]: AssociationInfo
  }

  export function associations(
    ...associationList: Array<[TableName<any>, AssociationInfo]>
  ): Associations

  export default class Model {
    public static table: TableName<Model>

    public static associations: Associations

    public id: RecordId

    public syncStatus: SyncStatus

    public update(recordUpdater?: (model: this) => void): Promise<void>

    public prepareUpdate(recordUpdater?: (model: this) => void): this

    public markAsDeleted(): Promise<void>

    public destroyPermanently(): Promise<void>

    public observe(): Observable<this>

    public batch(records: ReadonlyArray<Model>): Promise<void>

    public subAction<T>(action: () => Promise<T>): Promise<T>

    public collection: Collection<this>
  }
}
