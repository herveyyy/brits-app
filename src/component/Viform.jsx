 import {
    addDoc,
    getDocs,
    doc,
    collection,
    deleteDoc
} from 'firebase/firestore';
import React,{ useState } from 'react';
import { database } from './firebaseConfig';

export default function Viform() {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Skill, setSkill] = useState('');
    const [fireData, setFireData] = useState([]);
   
    const databaseReference = collection(database, 'utro');

    const handleDelete = async (id) => {
        try {
          console.log('Deleting document with id', id);
          await deleteDoc(doc(databaseReference, id)); 
          console.log('Document with id', id, 'successfully deleted!');
        getData();
        } catch (error) {
          console.error('Error deleting document:', error);
        }
       
      };
    
    const addData = () => {
        addDoc(databaseReference, {
        
            Name: Name,
            Email: Email,
            Skill: Skill,
            
        })
    }
    
    const getData = async () => {
        await getDocs(databaseReference)
        .then((response) => {
            setFireData(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    const Print = () => {
        window.print(); 
    }

    const deleteDocument = async () => {
        let fieldToEdit = doc(databaseReference, 'utro', data.id);
        deleteDoc(fieldToEdit)
        .then(() => {
          alert('Record successfully deleted.')
        })
        .catch((err) => {
          alert('Record cannot be deleted.')
        })
      }

      const updateField = () => {
        let fieldToEdit = doc(databaseReference);
        updateDoc(fieldToEdit, {
          Name: Name,
          Email: Email,
          Skill: Skill
        })
          .then(() => {
            alert('Personal information was updated successfully.')
            clearInputFields()
          })
          .catch((err) => {
            console.log(err)
          })
      }

    return (
       
        <div className=' w-auto flex flex-col justify-center place-items-center min-h-screen py-5 relative'>
            <div className='right-10 left-16 mb-11'>
        <div 
            
            className='print:hidden mt-11 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-emerald-200 dark:border-green-900'>
                
            <div>
                <h1 className='text-Black font-extrabold mb-7 text-center text-4xl'> Form </h1>
            </div> 

            <div className="relative font-medium z-0 w-full mb-10 group">
                <input type="text"
                name="floating_name" 
                id="floating_name" 
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-emerald-900 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" 
                placeholder=" " 
                required  
                onChange={(event) => setName(event.target.value)}
                value={Name}/>
                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
          
            <div className="relative font-medium z-0 w-full mb-10 group">
                <input type="text" 
                name="floating_email" 
                id="floating_email" 
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-emerald-900 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" 
                placeholder=" " 
                required   
                onChange={(event) => setEmail(event.target.value)}
                value={Email}/>
                <label htmlFor="floating_email" 
                className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
          
            <div className="relative font-medium z-0 w-full mb-10 group">
                <input type="text" 
                name="floating_Skill" 
                id="floating_Skill" 
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-emerald-900 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" 
                placeholder=" " 
                required   
                onChange={(event) => setSkill(event.target.value)}
                value={Skill}/>
                <label htmlFor="floating_Skill" 
                className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-emerald-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skill</label>
            </div>
        
            <div className="flex font-medium place-items-center justify-center text-lg">
                <button  type="print" 
                className="mx-3 text-white bg-cyan-900 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-900 dark:focus:ring-blue-500 print:hidden right-10" 
                onClick={Print}>Print</button>
                <br/><br/> 
                <button type="Submit" 
                className="mx-3 text-white bg-cyan-900 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-900 dark:focus:ring-blue-500 print:hidden right-10" 
                onClick={addData}>AddData</button>
                <br/><br/>
                <button type="GetData" 
                className="mx-3 text-white bg-cyan-900 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-900 dark:focus:ring-blue-500 print:hidden right-10" 
                onClick={getData}>GetData</button>
                <br/><br/>
                </div>
                <div>
              
                
                <button type="Update"
                className="mx-3 text-white bg-cyan-900 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-900 dark:focus:ring-blue-500 print:hidden right-10" 
                onClick={(updateField) => updateField(data.id)}>Update</button>
            </div>
        
        </div>
        </div>

        <div>
        <table className="w-auto h-auto mr-52 ml-52 py-10 text-sm text-center text-black dark:text-black">
              <thead className="text-lg text-black uppercase bg-black dark:bg-black dark:text-white">

                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Skill</th>
                </tr>
              </thead>
                        <tbody >
                                 {fireData.map((data) => {
                                        return (
                                           
                                                <tr className="border-b " key={data.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:bg-emerald-200">{data.id}</td>
                                                    <td className="text-lg text-black bg-black dark:bg-emerald-200 font-medium px-6 py-4 whitespace-nowrap">{data.Name}</td>
                                                    <td className="text-lg text-black bg-black dark:bg-emerald-200 font-medium px-6 py-4 whitespace-nowrap">{data.Email}</td>
                                                    <td className="text-lg text-black bg-black dark:bg-emerald-200 font-medium px-6 py-4 whitespace-nowrap">{data.Skill}</td>
                                                    <td className="text-lg text-black bg-black dark:bg-emerald-200 font-medium px-6 py-4 whitespace-nowrap">  <button type='Delete'
                className="ml-16 mr-6 mt-4 text-white bg-cyan-900 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-900 dark:focus:ring-blue-500 print:hidden right-10"
                onClick={() => handleDelete(data.id)} >Delete</button></td>
                                                    
                                                </tr>
                                            )
                                        })}
                        </tbody>
        </table>
            
    </div>
    </div>
    )
}
