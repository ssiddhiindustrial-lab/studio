
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  setDoc,
  query,
  limit
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
    // Only proceed if database is actually empty
    const q = query(collection(db, COLLECTION_NAME), limit(1));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log("Seeding database with static projects...");
      const promises = staticProjects.map(project => 
        setDoc(doc(db, COLLECTION_NAME, project.slug), project)
      );
      await Promise.all(promises);
      console.log("Migration complete.");
    }
  } catch (error) {
    console.warn("Sync error (non-fatal):", error);
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push(doc.data() as Project);
    });
    // Fallback to static data if Firestore is empty or inaccessible
    return projects.length > 0 ? projects : staticProjects;
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
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
    console.error("Error fetching project by slug:", error);
    return staticProjects.find(p => p.slug === slug) || null;
  }
}

export async function updateProjectData(slug: string, data: Partial<Project>) {
  try {
    const docRef = doc(db, COLLECTION_NAME, slug);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Failed to update project data:", error);
    throw error;
  }
}

export async function uploadProjectImage(slug: string, file: File): Promise<string> {
  try {
    const storageRef = ref(storage, `projects/${slug}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error("Failed to upload project image:", error);
    throw error;
  }
}
