import React from 'react'
import InnerContainer from './InnerContainer'

function MainContainer() {

    const names = [
        {
          id: 1,
          firstName: 'Matthew Rich',
          lastName: 'Marin',
          age: 31,
          gender: 'Male'
        },
        {
          id: 2,
          firstName: 'Ethan Tyler',
          lastName: 'Marin',
          age: 10,
          gender: 'Male'
        },
        {
          id: 3,
          firstName: 'Emely',
          lastName: 'Africa',
          age: 31,
          gender: 'Female'
        },
        {
          id: 4,
          firstName: 'Prince Nimrod',
          lastName: 'Marin',
          age: 8,
          gender: 'Male'
        },
        {
          id: 5,
          firstName: 'John Michael',
          lastName: 'Francisco',
          age: 28,
          gender: 'Male'
        },
        {
          id: 6,
          firstName: 'Bubbles',
          lastName: 'Luna',
          age: 2,
          gender: 'Non-Binary'
        }
        
      ]
    
      const NameCardList = names.map(
        (name) => <InnerContainer key={name.id} firstName={name.firstName} lastName={name.lastName} age={name.age} gender={name.gender}/>
      );
    
  return (
    <>
       <div className='bg-primary m-3 justify-content-center row '>
            { NameCardList}
       </div>
        
   
      
    </>
    
  )
}

export default MainContainer