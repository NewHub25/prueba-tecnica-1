export interface ItemsType {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  timeStamp: number;
}

export type IdType = ItemsType[Exclude<keyof ItemsType, 'text' | 'timeStamp'>]
