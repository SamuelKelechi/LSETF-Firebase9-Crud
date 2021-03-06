import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {db} from '../../Base';
import './Database.css';
import moment from 'moment';
import { storage } from '../../Base';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {collection, getDocs, addDoc, doc, deleteDoc, Timestamp, query, orderBy, limit} from 'firebase/firestore';
import { toast } from 'react-toastify';

const Database = () => {
    const [newname, setNewname] = useState('');
    const [newage, setNewage] = useState(0);
    const [imgurl, setImgurl] = useState('');
    const [progress, setProgress] = useState(0);
    const [newtime, setNewtime] = useState(Timestamp.now().toDate())
    const [lsetf, setLsetf] = useState([]);

    const usersCollectionRef = collection(db, "students")

    const que = query(usersCollectionRef, orderBy("time", "desc"))

    const AddStud = () => {
        const storageRef = ref(storage, `/images/${Date.now()}${imgurl.name}`);
        const uploadImage = uploadBytesResumable(storageRef, imgurl)
        uploadImage.on("state_changed", (snapshot) => {
        const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
    },
    (err)=>{
        console.log(err)
    },
    ()=> {
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url)=> {
            addDoc(usersCollectionRef, {name:newname, age:newage, time:newtime, imgurl:url,})
            .then(() => {
                toast("Uploaded Successfully", {type:"success"});
                setProgress(0);
            })
            .catch(err=>{
                toast("Upload Failed", {type:"error"});
            })
        }) 
    })   
    }

    const Remove = () => {
        
    }

    const getData = async () => {
        const data = await getDocs(que, usersCollectionRef)
        setLsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }

    const DeleteStud = async (id) => {
        const  userDoc = doc(db, "students", id )
        await deleteDoc(userDoc);
    }
   

    useEffect(() => {
        getData();
    }, []);

  return (
    <Container>
        <input id='text1'  name="newname" onChange={((event) => {
            setNewname(event.target.value)
        })}  placeholder='name'/>

        <input id='text2'  name="newage"  onChange={((event) => {
            setNewage(event.target.value)
        })} placeholder='age'/>

        <input id="text3" name="imgurl" onChange={((e) => {
            setImgurl(e.target.files[0])
        })}/>
      

                {
                progress === 0 ? null : (
                    <div style={{width: '250px', height:"40px"}}>
                        <p style={{width:`${progress}%`, backgroundColor:'red'}}> {`Uploading Image ${progress}%`} </p>
                    </div>
                )
                }

        <button  onClick={(() => {
             AddStud();
             Remove();
             console.log('Am clicked')
        })}
        >Add Student</button>
        
        {/* <div>{lsetf().length}</div> */}
       {lsetf.map(({id, name, age, time, imgurl}) => (
           <div key={id}>
           <h2>Name:{name}</h2>
           <p>Age:{age}</p>
            <img style={{height:'50px'}} src={imgurl} alt="img"/>
           {/* Syntax/Format for Momentjs */}
           <p>  {moment(time.toDate()).fromNow()} </p>

            {/* <p>{time.toDate().toDateString()}</p> */}
           <button onClick={(() => {
               DeleteStud(id)
           })}>Delete</button>
       </div>
       ))}
    </Container>
  )
}

export default Database;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        display: flex;
        width: 600px;
        justify-content: space-around;
    }
`