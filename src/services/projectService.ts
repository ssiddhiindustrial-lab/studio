
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  setDoc,
  deleteDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Project, projects as staticProjects } from "@/lib/projects-data";

const COLLECTION_NAME = "projects";

/**
 * Syncs static projects to Firestore if they don't exist.
 */
export async function syncProjectsToFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    if (querySnapshot.empty) {
      for (const project of staticProjects) {
        await setDoc(doc(db, COLLECTION_NAME, project.slug), project);
      }
      console.log("Migration complete: Projects synced to Firestore.");
    }
  } catch (error) {
    console.error("Sync error:", error);
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push(doc.data() as Project);
    });
    return projects.length > 0 ? projects : staticProjects;
  } catch (error) {
    return staticProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, slug);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Project;
    }
    return staticProjects.find(p => p.slug === slug) || null;
  } catch (error) {
    return staticProjects.find(p => p.slug === slug) || null;
  }
}

export async function updateProjectData(slug: string, data: Partial<Project>) {
  const docRef = doc(db, COLLECTION_NAME, slug);
  await updateDoc(docRef, data);
}

export async function uploadProjectImage(slug: string, file: File): Promise<string> {
  const storageRef = ref(storage, `projects/${slug}/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}
