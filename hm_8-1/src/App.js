/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import React, {useState, useEffect} from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
   const [info, setInfo] = useState([]);
   const [details, setDetails] = useState(null);
   const [id, setId] = useState(null);
   useEffect(() => {
     fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ')
     .then(response => response.json())
     .then(data => setInfo(data));
   },[])
   

    useEffect(() => {
      if(!id ){return}
     fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
     .then(response => response.json())
     .then(data => setDetails(data));
    }, [id])

    
  

   const onClickHandle =  (e) => {
    setId(prevId => prevId = e.target.id);
    

   
}
  return (<>
     <div className='box'>
     <ul className='ulList'>
        {info.map(el => <List key={nanoid()} {...el} fn={onClickHandle} class={id}/>)}
      </ul>
      <div className='details'>
        <Details data={details} />
      </div>
     </div>
  </>
  )
}

export default App;
