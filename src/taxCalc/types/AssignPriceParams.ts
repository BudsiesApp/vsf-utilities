export default interface AssignPriceParams {
  product: any;
  target: string;
  price: number | null;
  tax?: number;
  deprecatedPriceFieldsSupport?: boolean;
}
