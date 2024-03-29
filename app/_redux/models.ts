export interface BaseEntity {
  date: string;
  slug: string;
  title: string;
  description: string;
}

export interface SlugEntity<T extends BaseEntity> {
  id: string;
  attributes: Omit<T, 'id'>;
}

export interface Digest extends BaseEntity {
  content: string;
}

export interface Event extends BaseEntity {
  link: string;
}

export interface Response<T> {
  data: T;
  meta: Metadata;
}

interface Metadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Feedback extends BaseEntity {
  text: string;
}

export enum Entities {
  Events = 'events',
  Digests = 'digests',
  Feedbacks = 'feedbacks',
}
