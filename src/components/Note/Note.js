import { React, useEffect } from 'react';

function Note(props) {

    const style = {
        note_container: {
            border: '1px solid grey',
            height: 'auto',
            width: '350px',
            float: 'left',
            paddingLeft: '25px',
            marginTop: '10px',
            backgroundColor: props.note.color,
            position: 'relative',
            border: 'none',
            borderRadius: '3px',
            top: '0px',
            color: '#fff',
        },
        note: {
            whiteSpace: 'pre-line',
        }
    }

    // useEffect(() => {
    //     console.log(props.color, 'color');
    // }, [])

    return (
        <div style={style.note_container}>
            <h3> {props?.note.title} </h3>
            <p style={style.note}> {props?.note.description} </p>
        </div>
    )
}

export default Note;