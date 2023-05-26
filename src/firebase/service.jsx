import { getFirestore, collection, query, where, getDocs} from 'firebase/firestore';
const db = getFirestore()
const q = query(collection(db, "movies"))

const querySnapshot = await getDocs(q);
