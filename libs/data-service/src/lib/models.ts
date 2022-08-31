export interface BaseEntity {
  id: string;
  date: string;
}

export interface Digest extends BaseEntity {
  content: string;
  description: string;
  title: string;
  visible: boolean;
}

export interface Event extends BaseEntity {
  description: string;
  link: string;
  title: string;
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
