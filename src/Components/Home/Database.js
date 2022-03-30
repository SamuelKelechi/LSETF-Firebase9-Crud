import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {db} from '../../Base';

import './Database.css'

import {collection, getDocs, addDoc, doc, deleteDoc} from 'firebase/firestore';

const Database = () => {
    const [newname, setNewname] = useState('');
    const [newage, setNewage] = useState(0);

    const [lsetf, setLsetf] = useState([]);

    const usersCollectionRef = collection(db, "students")

    const AddStud = async () => {
        await addDoc(usersCollectionRef, {name:newname, age:newage})
    }

    const getData = async () => {
        const data = await getDocs(usersCollectionRef)
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
        <input onChange={((event) => {
            setNewname(event.target.value)
        })}  placeholder='name'/>

        <input  onChange={((event) => {
            setNewage(event.target.value)
        })}placeholder='age'/>

        <button  onClick={(() => {
             AddStud();  
        })}
        >Add Student</button>
        

       {lsetf.map((datas) => (
           <div key={datas.id}>
           <h2>Name:{datas.name}</h2>
           <p>Age:{datas.age}</p>

           <button onClick={(() => {
               DeleteStud(datas.id)
           })}>Delete</button>
             {/* <p className='del'>Are you sure you want to delete? <button onClick={(() => {
               DeleteStud(datas.id)
           })}>yes</button></p> */}
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