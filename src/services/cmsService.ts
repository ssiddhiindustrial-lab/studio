
import { db, storage } from "@/lib/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { errorEmitter } from '@/firebase/error-emitter'
import { FirestorePermissionError } from '@/firebase/errors'

const COLLECTION_NAME = "site_content"

export interface PageContent {
  [key: string]: any
}

export async function getPageContent(pageId: string): Promise<PageContent | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, pageId)
    const docSnap = await getDoc(docRef)
    return docSnap.exists() ? docSnap.data() : null
  } catch (error) {
    return null
  }
}

export function updatePageContent(pageId: string, content: PageContent) {
  const docRef = doc(db, COLLECTION_NAME, pageId)
  
  setDoc(docRef, content, { merge: true })
    .catch(async (error) => {
      const permissionError = new FirestorePermissionError({
        path: docRef.path,
        operation: 'write',
        requestResourceData: content,
      });
      errorEmitter.emit('permission-error', permissionError);
    });
}

export async function uploadCmsImage(path: string, file: File): Promise<string> {
  const storageRef = ref(storage, `cms/${path}/${Date.now()}_${file.name}`)
  const snapshot = await uploadBytes(storageRef, file)
  return await getDownloadURL(snapshot.ref)
}
