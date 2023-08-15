export default interface Sales {
  id?: string;
  type?: string;
  products?: string;
  quantity?: number;
  price?: number;
  discount?: number;
  tax?: number;
  payment?: string;
  total?: number,
  date?: Date;
}
