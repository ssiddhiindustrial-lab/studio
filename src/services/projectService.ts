
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc,
  query,
  limit
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Project, projects as staticProjects } from "@/lib/projects-data";

const COLLECTION_NAME = "projects";

export async function syncProjectsToFirestore() {
  try {
    const q = query(collection(db, COLLECTION_NAME), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      const promises = staticProjects.map(project => 
        setDoc(doc(db, COLLECTION_NAME, project.slug), project)
      );
      await Promise.all(promises);
    }
  } catch (error) {
    console.warn("Sync info (ignorable):", error);
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
  try {
    await setDoc(docRef, data, { merge: true });
    return { success: true };
  } catch (error: any) {
    console.error("Firestore Write Error (Project):", error);
    throw error;
  }
}

export async function uploadProjectImage(slug: string, file: File): Promise<string> {
  const storageRef = ref(storage, `projects/${slug}/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}
