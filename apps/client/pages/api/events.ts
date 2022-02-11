import { Firestore } from '@google-cloud/firestore';

const firestore = new Firestore({
  projectId: 'js-machine-next-340117',
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
});

export default async function handler(req, res) {
  const snapshot = await firestore
    .collection('events')
    .orderBy('date', 'desc')
    .get();

  const data = mapCollectionFromSnapshot(snapshot);

  res.status(200).json(data);
}

function mapCollectionFromSnapshot<T>(
  snapshot: FirebaseFirestore.QuerySnapshot
): T[] {
  return snapshot.docs.map<T>((doc) => mapEntityFromSnapshot(doc));
}

function mapEntityFromSnapshot<T>(
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
