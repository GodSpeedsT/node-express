import { v4 as uuidv4 } from 'uuid';

export interface IPrice {
  id: string;
  scheduleId: string | null;
  priceValue: number;
  priceCurrency: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Price implements IPrice {
  id: string;

  scheduleId: string | null;

  priceValue: number;

  priceCurrency: string;

  createdAt: Date;

  updatedAt: Date;

  constructor({
    id = uuidv4(),
    scheduleId = null,
    priceValue = 0,
    priceCurrency = 'USD',
  }: Partial<IPrice> = {}) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static toResponse(price: IPrice) {
    const { id, scheduleId, priceValue, priceCurrency } = price;
    return { id, scheduleId, priceValue, priceCurrency };
  }
}