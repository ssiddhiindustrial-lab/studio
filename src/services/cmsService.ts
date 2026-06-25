
import { db, storage } from "@/lib/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

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
    console.error("Error fetching content:", error)
    return null
  }
}

export function updatePageContent(pageId: string, content: PageContent) {
  const docRef = doc(db, COLLECTION_NAME, pageId)
  // No await here for faster UI response
  setDoc(docRef, content, { merge: true })
}

export async function uploadCmsImage(path: string, file: File): Promise<string> {
  const storageRef = ref(storage, `cms/${path}/${Date.now()}_${file.name}`)
  const snapshot = await uploadBytes(storageRef, file)
  return await getDownloadURL(snapshot.ref)
}
