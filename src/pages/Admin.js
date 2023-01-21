import { useState } from "react";
import { storage,} from './firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

function Admin() {
  const [imgUrls, setImgUrls] = useState([]);
  const [progresspercent, setProgresspercent] = useState(0);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [title, setTitle] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [surface, setSurface] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentPhone, setAgentPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const files = e.target[0].files;
    if (!files) return;

    // Create an array to store the promises for each image upload
    const uploadPromises = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Add the promise to the array
      uploadPromises.push(
        new Promise((resolve, reject) => {
          uploadTask.on("state_changed",
            (snapshot) => {
              const progress =
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setProgresspercent(progress);
            },
            (error) => {
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        })
      );
    }

    //getFirestore Wait for all promises to resolve and set the imgUrls state
    const urls = await Promise.all(uploadPromises);
    setImgUrls(urls);
    let imgUrlsObject = {}
    urls.forEach((url,index)=>{
        imgUrlsObject[index]=url;
    });

    try {
            const docRef = await addDoc(collection(db, "products"), {
              type: type,
              name: name,
              description: description,
              imgUrls: imgUrlsObject,
              country: country,
              title: title,    
              bedrooms: bedrooms,
              bathrooms: bathrooms,
              surface: surface,
              year: year,
              price: price,
              agent: {
                name: agentName,
                phone: agentPhone,
              },
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='form'>
        <input type='file' multiple />
        <input type='text' placeholder='Type' onChange={(e) => setType(e.target.value)} />
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <textarea placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
        <input type='text' placeholder='Country' onChange={(e) => setCountry(e.target.value)} />
        <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        <input type='text' placeholder='Bedrooms' onChange={(e) => setBedrooms(e.target.value)} />
        <input type='text' placeholder='Bathrooms' onChange={(e) => setBathrooms(e.target.value)} />
        <input type='text' placeholder='Surface' onChange={(e) => setSurface(e.target.value)} />
        <input type='text' placeholder='Year' onChange={(e) => setYear(e.target.value)} />
        <input type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        <input type='text' placeholder='Agent Name' onChange={(e) => setAgentName(e.target.value)} />
        <input type='text' placeholder='Agent Phone' onChange={(e) => setAgentPhone(e.target.value)} />
        <button type='submit'>Upload</button>
      </form>
      {
        !imgUrls.length &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrls.length > 0 &&
        imgUrls.map((url, index) => (
          <img key={index} src={url} alt='uploaded file' height={200} />
        ))
      }
    </div>
  );
}
export default Admin;
