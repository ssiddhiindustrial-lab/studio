
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  query, 
  where,
  setDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Project, projects as staticProjects } from "@/lib/projects-data";

const COLLECTION_NAME = "projects";

/**
 * Syncs static projects to Firestore if they don't exist.
 * This is a one-time migration helper.
 */
export async function syncProjectsToFirestore() {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  if (querySnapshot.empty) {
    for (const project of staticProjects) {
      await setDoc(doc(db, COLLECTION_NAME, project.slug), project);
    }
    console.log("Migration complete: Projects synced to Firestore.");
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  const projects: Project[] = [];
  querySnapshot.forEach((doc) => {
    projects.push(doc.data() as Project);
  });
  return projects.length > 0 ? projects : staticProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const docRef = doc(db, COLLECTION_NAME, slug);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as Project;
  }
  
  // Fallback to static data for initial load
  return staticProjects.find(p => p.slug === slug) || null;
}

export async function updateProjectImage(slug: string, file: File, type: 'main' | 'gallery') {
  const storageRef = ref(storage, `projects/${slug}/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);

  const docRef = doc(db, COLLECTION_NAME, slug);
  const project = await getProjectBySlug(slug);

  if (!project) throw new Error("Project not found");

  if (type === 'main') {
    await updateDoc(docRef, { imageUrl: downloadURL });
  } else {
    const gallery = project.gallery || [];
    await updateDoc(docRef, { gallery: [...gallery, downloadURL] });
  }

  return downloadURL;
}
