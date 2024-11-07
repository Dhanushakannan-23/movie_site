import React, { useState } from 'react';
import NextPageModal from './NextPageModal';

export default function NextPage() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null); // Selected student state
    const [selectedRowId, setSelectedRowId] = useState(null);

    const studentData = [
        { rowId: 1,name: 'John Doe', age: 18, subject: 'Maths', mark: 85 },
        { rowId: 2,name: 'Jane Smith', age: 17, subject: 'Science', mark: 92 },
        { rowId: 3,name: 'Michael Johnson', age: 19, subject: 'English', mark: 88 },
        { rowId: 4,name: 'Emily Davis', age: 18, subject: 'History', mark: 79 },
      ];
  const handleViewClick = (student) => {
   
    setSelectedStudent(student);
    setSelectedRowId(student.rowId); // Pass the rowId
    setIsModalOpen(true);
  };

      const closeModal = () => {
      
        setIsModalOpen(false);
        setSelectedStudent(null); // Clear selected student when closing modal
      };
    
  return (
    <div>
    <h1 className='text-center text-2xl my-5 text-amber-700'>Welcome to next page</h1>
    <table className='table-auto w-96 mx-auto  border-collapse border border-gray-400 '>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border border-gray-400 p-2'>Student Name</th>
            <th className='border border-gray-400 p-2'>Age</th>
            <th className='border border-gray-400 p-2'>Subject</th>
            <th className='border border-gray-400 p-2'>Mark</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index} className='text-center'>
              <td className='border border-gray-400 p-2'>{student.name}</td>
              <td className='border border-gray-400 p-2'>{student.age}</td>
              <td className='border border-gray-400 p-2'>{student.subject}</td>
              <td className='border border-gray-400 p-2'>{student.mark}
              <button
                  className='bg-blue-500 text-white px-4 py-1 rounded mx-10'
                onClick={() => handleViewClick(student)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
         {isModalOpen && selectedStudent && (
              <NextPageModal student={selectedStudent}   rowId={selectedRowId} closeModal={closeModal} />
      )}
    </div>
  )
}
