import { v4 as uuidv4 } from 'uuid';

export class Tour {
  constructor({
    id = uuidv4(),
    title = 'New Tour',
    slug = '',
    description = '',
    isAlive = true,
  } = {}) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.isAlive = isAlive;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static toResponse(tour) {
    const { id, title, slug, description, isAlive } = tour;
    return { id, title, slug, description, isAlive };
  }
}
