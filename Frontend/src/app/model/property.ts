import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  // @ts-ignore
  Id: number;
   // @ts-ignore
  SellRent: number;
   // @ts-ignore
  Name: string;
   // @ts-ignore
  PType: string;
   // @ts-ignore
  BHK: number;
   // @ts-ignore
  FType: string;
   // @ts-ignore
  Price: number;
   // @ts-ignore
  BuiltArea: number;
  CarpetArea?: number;
   // @ts-ignore
  Address: string;
  Address2?: string;
   // @ts-ignore
  City: string;
  FloorNo?: string;
  TotalFloor?: string;
   // @ts-ignore
  RTM: number;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
   // @ts-ignore
  PostedOn: string;
   // @ts-ignore
  PostedBy: number;
}
