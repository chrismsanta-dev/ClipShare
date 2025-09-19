import { Injectable } from '@nestjs/common';
import { Firestore, getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class FirestoreService {
  private readonly firestore: Firestore = getFirestore();

  async addDocument(collection: string, data: any): Promise<any> {
    const docRef = this.firestore.collection(collection).add(data);
    return docRef;
  }

  async getDocument<T = unknown>(collection: string, id: string): Promise<T & { id: string }> {
    const doc = await this.firestore.collection(collection).doc(id).get();
    if (!doc.exists) {
      throw new Error('Document not found');
    }
    return {
      id: doc.id,
      ...(doc.data() as T),
    };
  }

  async updateDocument(collection: string, id: string, data: any): Promise<void> {
    await this.firestore.collection(collection).doc(id).update(data);
  }

  async deleteDocument(collection: string, id: string): Promise<void> {
    await this.firestore.collection(collection).doc(id).delete();
  }

  async getAllDocuments<T = unknown>(collection: string): Promise<(T & { id: string })[]> {
    const snapshot = await this.firestore.collection(collection).get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as T),
    }));
  }
}
