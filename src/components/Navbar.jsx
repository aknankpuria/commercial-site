import React from 'react'

const Navbar = () => {
  return (
    <div className="h-32 bg-gray-300 flex-row justify-between items-center">
    

    <ul className="uppercase flex">
   <li> logo</li>
   <li> whtsapp</li>
   <li>email</li>
   <li>
        <ul>
            <li>fb</li>
            <li>insta</li>
            <li>in</li>
        </ul>

   </li>

    </ul>

    </div>
  )
}

export default Navbar