export interface BaseModel {
  /** Item id */
  id?: any;
  /** Item active flag */
  active?: boolean;
  /** Item fromSystem flag */
  fromSystem?: boolean;
  /** Item creation timestamp */
  createdAt?: Date;
  /** Item update timestamp */
  updatedAt?: Date;
}
