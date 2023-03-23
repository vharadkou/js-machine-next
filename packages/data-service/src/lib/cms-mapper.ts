import { BaseEntity, SlugEntity } from './models';

export function mapSlugData<T extends BaseEntity>(
  data: SlugEntity<T>
): BaseEntity {
  return {
    id: data.id,
    ...data.attributes,
  };
}
