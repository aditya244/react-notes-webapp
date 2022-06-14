import { React } from 'react';
import { useState, useEffect } from 'react'; 
import Note from '../Note/Note';
import './Notes.css';

const style = {
    container: {
        paddingLeft: '80px',
        paddingRight: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    submitBtn: {
        backgroundColor: '#141D23',
        color: '#FBFBFF',
        height: '45px',
        width: '140px',
        borderRadius: '5px',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: '5px'
    },
    textArea: {
        backgroundColor: '#fff',
        borderRadius: '5px'
    },
    yellowColorBtn: {
        backgroundColor: '#F6AE2D',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        border: 'none',
    },
    blueColorBtn: {
        backgroundColor: '#2F4858',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        border: 'none',
    },
    redColorBtn: {
        backgroundColor: '#81171B',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        border: 'none',
    },
    greenColorBtn: {
        backgroundColor: '#38420C',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        border: 'none',
    },
    orangeColorBtn: {
        backgroundColor: '#FF4F42',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        border: 'none',
    }
}

 function Notes(){

    const initialNoteState = {
        description: '',
        title: '',
        color: ''
    }

    const [note, setNote] = useState({initialNoteState});
    const [notes, setNotes] = useState([]);

    const onChangeHandler = (e) => {
        setNote((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onNoteSubmitHandler = (e) => {
        e.preventDefault();
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        setNote(initialNoteState);
    }

    const onSelectColor = (color) => {
        setNote((prevState) => ({
            ...prevState,
            'color': color
        }))
    }
    
    useEffect(() => {
        console.log(notes, 'notes')
    }, [notes])

    return (
        <div style={style.container}>
            <p> Notes </p>
            <form onSubmit={onNoteSubmitHandler}>
                <input 
                    style={style.title}
                    type="text" 
                    name="title"
                    onChange={onChangeHandler} 
                    value={note.title} >
                </input>
                <textarea 
                    style={style.textArea}
                    rows={12}
                    column={6}
                    name="description"
                    onChange={onChangeHandler}
                    value={note.description}>
                </textarea>
                <button type='button' style={style.yellowColorBtn} onClick={() => onSelectColor('#F6AE2D')}></button>
                <button type='button' style={style.blueColorBtn} onClick={() => onSelectColor('#2F4858')}></button>
                <button type='button' style={style.greenColorBtn} onClick={() => onSelectColor('#38420C')}></button>
                <button type='button' style={style.redColorBtn} onClick={() => onSelectColor('#81171B')}></button>
                <button type='button' style={style.orangeColorBtn} onClick={() => onSelectColor('#FF4F42')}></button>
                <button type='submit' style={style.submitBtn}> Add Note </button>
            </form>
            {
                notes.map(el => {
                    return  (
                        <div >
                            <Note key={Math.random()} note={el} />
                        </div>
                    )   
                })
            }
        </div>
    )
}

export default Notes;