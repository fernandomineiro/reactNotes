const Note = ({ note, toggleImportance }) => {
    const label = note.important ? "Não é importante" : "É importante";

    return (
        <li className='note'>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
};

export default Note;