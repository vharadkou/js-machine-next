import { Firestore, Timestamp } from '@google-cloud/firestore';
import { BaseEntity } from './models';

export const firestore = new Firestore({
  projectId: 'js-machine-next-340117',
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
});

export function mapCollectionFromSnapshot<T>(
  snapshot: FirebaseFirestore.QuerySnapshot
): T[] {
  return snapshot.docs.map<T>((doc) => mapEntityFromSnapshot(doc));
}

export function mapEntityFromSnapshot<T>(
  snapshot:
    | FirebaseFirestore.DocumentSnapshot
    | FirebaseFirestore.QueryDocumentSnapshot
): T {
  const data = snapshot.data();

  if (!data) {
    throw new Error('data is undefined');
  }

  return {
    ...(data as T),
    id: snapshot.ref.id,
    date: data.date.toDate(),
  };
}

export function convertToFirestoreEntity<T extends BaseEntity>(
  data: T
): Pick<T, Exclude<keyof T, 'id'>> & {
  date: FirebaseFirestore.Timestamp;
} {
  // unsafe remove id property
  delete data.id;

  const date = data.date ? new Date(data.date) : new Date();

  return {
    ...data,
    date: Timestamp.fromDate(date),
  };
}
