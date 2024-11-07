import React, { useState } from 'react'

export default function NextPageModal({ student, closeModal,rowId  }) {
    const [name,setName] = useState("")
    const handleName = (event) =>{
        setName(event.event.target);
    }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg w-1/3'>
      <h2 className='text-xl font-bold mb-4'>Student Details (Row ID: {rowId})</h2>
        {student ? (
          <>
          <div className="container_body">
          <label>Name </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={student.name}
                onChange={handleName}
                className="mt-4 p-2 border border-gray-300 rounded mx-5 w-72"
              />
              <br/>
               <label> Age </label>
              <input
                type="text"
                placeholder="Enter your age"
                value={student.age}
                onChange={handleName}
                className="mt-4 ml-9 p-2 border border-gray-300 rounded mx-5 w-72"
              />
              <br/>
            
                <label> Mark  </label>
              <input
                type="text"
                placeholder="Enter your age"
                value={student.mark}
                onChange={handleName}
                className="mt-4 p-2 ml-7 border border-gray-300 rounded mx-5 w-72"
              />
              <br/>
                 <label>Subject </label>
              <input
                type="text"
                placeholder="Enter your age"
                value={student.subject}
                onChange={handleName}
                className="mt-4 p-2 ml-3 border border-gray-300 rounded mx-5 w-72"
              />
              
          </div>
          </>
        ) : (
          <p>No student selected</p>
        )}
        <button
          className='mt-4 bg-red-500 text-white px-4 py-2 rounded w-96'
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  )
}
