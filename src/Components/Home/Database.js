import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {db} from '../../Base';
import './Database.css';
import {collection, getDocs, addDoc, doc, deleteDoc, Timestamp, query, orderBy, limit} from 'firebase/firestore';

const Database = () => {
    const [newname, setNewname] = useState('');
    const [newage, setNewage] = useState(0);
    const [newtime, setNewtime] = useState(Timestamp.now().toDate())
    const [lsetf, setLsetf] = useState([]);

    const usersCollectionRef = collection(db, "students")

    const que = query(usersCollectionRef, orderBy("time", "desc"), limit(4))

    const AddStud = async () => {
        await addDoc(usersCollectionRef, {name:newname, age:newage, time:newtime});
    }

    const Remove = () => {
        document.getElementById("text1").value = " ";
        document.getElementById("text2").value = " ";
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
        <input id='text1' name="newname" onChange={((event) => {
            setNewname(event.target.value)
        })}  placeholder='name'/>

        <input id='text2' name="newage"  onChange={((event) => {
            setNewage(event.target.value)
        })}placeholder='age'/>

        <button  onClick={(() => {
             AddStud();
             Remove(); 
        })}
        >Add Student</button>
        

       {lsetf.map(({id, name, age, time}) => (
           <div key={id}>
           <h2>Name:{name}</h2>
           <p>Age:{age}</p>
            <p>{time.toDate().toDateString()}</p>
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