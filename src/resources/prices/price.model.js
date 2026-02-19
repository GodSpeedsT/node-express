import { v4 as uuidv4 } from 'uuid';

export class Price {
  constructor({ id = uuidv4(), scheduleId = null, priceValue = 0, priceCurrency = 'USD' } = {}) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static toResponse(price) {
    const { id, scheduleId, priceValue, priceCurrency } = price;
    return { id, scheduleId, priceValue, priceCurrency };
  }
}
