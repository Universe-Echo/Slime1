import React, { createContext, useEffect, useState } from 'react'
import Add from '../img/avatarpng.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Register = () => {
  const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [err1, setErr1] = useState('')

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
}

  const handleSubmit = async (e) => {

    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    const displayName1 = displayName.toLowerCase()


    try {
      setIsSubmitting(true)
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      if (!file) {
        await setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          displayName,
          displayName1,
          email,
          photoURL: 'https://avatarfiles.alphacoders.com/211/thumb-211248.jpg'
        })

        await setDoc(doc(db, 'userChats', res.user.uid), {})
        navigate('/')
      }
       else {
        
      uploadTask.on(

        'state_changed',
        (snapshot) => {

          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              // console.log('Upload is paused');
              break;
            case 'running':
              // console.log('Upload is running');
              break;
          }
        },
        (error) => {

        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })

            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              displayName1,
              email,
              photoURL: downloadURL
            })

            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          });


        }
      );
       }


    } catch (err) {
      setErr(true)
      console.log(err.message)
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setErr1('Invalid Email')
      }

      else if (err.message === 'Firebase: Error (auth/wrong-password).') {
        setErr1('Invalid Password')

      }
      else if (err.message === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
        setErr1('Too many requests!')
      }

      else if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
setErr1('Email already registered!')
      }
      else {
        setErr1(`${err.message}`)
      }


      setTimeout(() => {
        window.location.reload()
      }, 2500);
    }

    

  }


  return (
    <div className='formContainer'>

      <div className='formWrapper'>
        <span className="logo">Slime</span>
        <span className="title">Sign up</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Nickname' required />
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          <input type="file" placeholder='Avatar' id='file' style={{ display: 'none' }} onChange={onSelectFile} />
          {selectedFile &&  <img src={preview} className='sl_img' /> }
          <label htmlFor="file"> <img src={Add} alt="" /> <span>Add profile pic</span> </label>
          <button>Sign up</button>
          {err && <span style={{color: '#ff7b7b'}}>{err1}</span>}
          {isSubmitting && <span>Registering.....</span>}
        </form>
        <p>Have an account already? <Link to={'/login'}>Login</Link></p>
      </div>

    </div>
  )
}

export default Register