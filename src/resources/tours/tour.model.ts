import { v4 as uuidv4 } from 'uuid';

export interface ITour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isAlive: boolean;
}

export class Tour implements ITour {
  id: string;

  title: string;

  slug: string;

  description: string;

  isAlive: boolean;

  constructor({
    id = uuidv4(),
    title = 'New Tour',
    slug = '',
    description = 'no description',
    isAlive = true,
  } = {}) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.isAlive = isAlive;
  }

  static toResponse(tour: Tour) {
    const { id, title, slug, description, isAlive } = tour;
    return { id, title, slug, description, isAlive };
  }
}
