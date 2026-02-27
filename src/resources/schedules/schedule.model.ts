import { v4 as uuidv4 } from 'uuid';

export interface Ischedule {
  id: string;
  productId: string | null;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Schedule implements Ischedule {
  id: string;

  productId: string | null;

  isActive: boolean;

  startDate: Date;

  endDate: Date;

  createdAt: Date;

  updatedAt: Date;

  constructor({
    id = uuidv4(),
    productId = null,
    isActive = true,
    startDate = new Date(),
    endDate = new Date(),
  } = {}) {
    this.id = id;
    this.productId = productId;
    this.isActive = isActive;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static toResponse(schedule: Schedule) {
    const { id, productId, isActive, startDate, endDate } = schedule;
    return { id, productId, isActive, startDate, endDate };
  }
}
