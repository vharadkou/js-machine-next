import {
  convertToFirestoreEntity,
  firestore,
  mapCollectionFromSnapshot,
  mapEntityFromSnapshot,
} from './firestore';

import { BaseEntity, Entities } from './models';

export async function get(collection: Entities): Promise<Event[]> {
  const snapshot = await firestore
    .collection(collection)
    .orderBy('date', 'desc')
    .get();

  return mapCollectionFromSnapshot(snapshot);
}

export async function getById(
  collection: Entities,
  id: string
): Promise<Event> {
  const snapshot = await firestore.collection(collection).doc(id).get();

  return mapEntityFromSnapshot(snapshot);
}

export async function getRecent(
  collection: Entities,
  limit = 4
): Promise<Event[]> {
  const snapshot = await firestore
    .collection(collection)
    .orderBy('date', 'desc')
    .limit(limit)
    .get();

  return mapCollectionFromSnapshot(snapshot);
}

export async function create<T extends BaseEntity>(
  collection: Entities,
  entity: T
): Promise<string> {
  const reference = await firestore
    .collection(collection)
    .add(convertToFirestoreEntity(entity));

  return reference.id;
}

export async function update<T extends BaseEntity>(
  collection: Entities,
  id: string,
  entity: T
): Promise<void> {
  await firestore
    .collection(collection)
    .doc(id)
    .set(convertToFirestoreEntity(entity), {
      merge: true,
    });
}

export async function delete_(collection: Entities, id: string): Promise<void> {
  await firestore.collection(collection).doc(id).delete();
}
