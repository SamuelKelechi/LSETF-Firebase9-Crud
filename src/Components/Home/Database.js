import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {db} from '../../Base';

import {collection, getDocs} from 'firebase/firestore';

const Database = () => {
    const [lsetf, setLsetf] = useState([]);

    const usersCollectionRef = collection(db, "students")

    const getData = async () => {
        const data = await getDocs(usersCollectionRef)
        setLsetf(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
   

    useEffect(() => {
        getData();
    }, []);

  return (
    <Container>
        
       {lsetf.map((datas) => (
           <div key={datas.id}>
           <h2>Name:{datas.name}</h2>
           <img style={{height:"100px"}} src={datas.avatar} alt="img"/>
           <p>Age:{datas.age}</p>
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