
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
    console.error("Error fetching page content:", error)
    return null
  }
}

export async function updatePageContent(pageId: string, content: PageContent) {
  const docRef = doc(db, COLLECTION_NAME, pageId)
  
  try {
    await setDoc(docRef, content, { merge: true });
    return { success: true };
  } catch (error: any) {
    const permissionError = new FirestorePermissionError({
      path: docRef.path,
      operation: 'write',
      requestResourceData: content,
    });
    errorEmitter.emit('permission-error', permissionError);
    throw error;
  }
}

export async function uploadCmsImage(path: string, file: File): Promise<string> {
  const storageRef = ref(storage, `cms/${path}/${Date.now()}_${file.name}`)
  const snapshot = await uploadBytes(storageRef, file)
  return await getDownloadURL(snapshot.ref)
}
