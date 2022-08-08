
import './App.css';
import Header from './Components/Header/Header';
import InputForm from './Components/InputForm/InputForm';
import NoteCard from './Components/NoteCard/NoteCard';
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [isReload]);

  useEffect(() => {

   fetch("http://localhost:4000/notes")
   .then(res=>res.json())
   .then(data=>setNotes(data))

    
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  
    fetch(`http://localhost:4000/note/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
      });
  };


  const handleSearch=(e)=>{
    e.preventDefault();
    const queryText= e.target.searchText.value;
    console.log('helloooooo', queryText);

    if(queryText){
      fetch(`http://localhost:4000/notes?user=${queryText}`)
   .then(res=>res.json())
   .then(data=>setNotes(data))
    }

  };


  const handlePost = (e)=>{
    e.preventDefault();
    const user= e.target.user.value;
    const textData= e.target.textData.value;
    console.log({user, textData});
    fetch("http://localhost:4000/note", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({ user, textData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
      });


  }


  return (
    <div >
      <Header handleSearch={handleSearch} ></Header>
      <InputForm  handlePost={handlePost} ></InputForm>
      <div >
        {notes.map((note) => (
          <NoteCard
            note={note}
            handleDelete={handleDelete}
            setIsReload={setIsReload}
            isReload={isReload}
          />
        ))}
      
    </div>
      
    </div>
  );
}

export default App;
