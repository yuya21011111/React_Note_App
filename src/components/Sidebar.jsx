import React from 'react'
import Main from './Main'
import "./Sidebar.css"
const Sidebar = ({ onAddNote,notes, onDeleteNote, activeNote, setActiveNote}) => {
  return (
  <div className='flex'>
     <div  className='bg-gray-100 h-max w-full  p-5'>
      <div className='flex'>
        <h1 className='mx-auto text-2xl font-medium'>ノート</h1>
        <button onClick={onAddNote} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>追加</button>
     </div>


     {notes.map((note) => {
      return(
       
          <div key={note.id} onClick={() => setActiveNote(note.id)}  className={`app-sidebar-note ${note.id === activeNote && "active"} mt-4 bg-blue-200 hover:bg-blue-400 `}>
            <div  className='mx-8 p-8'>
            <div className='text-sm text-red-500'>id:{note.id}</div>
                <div className='flex justify-between'>
                    <strong className='mr-8'>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)} className=' bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-0.5 rounded'>削除</button>
                </div>
                <p>{note.content}</p>
                <small className='text-gray-500'>{note.modDate}</small>
            </div>
         </div>
       
      )
     })}   
    </div>
  </div>
  )
}

export default Sidebar