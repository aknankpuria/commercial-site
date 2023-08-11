import React from 'react'

const Navbar = () => {
  return (
    <div className="h-32 bg-gray-300 flex-row justify-between items-center">
    

    <div className="flex flex-row justify-between items-center">
          <div className="basic-1/4"> logo</div>
          <div className="basic-1/4"> whtsapp</div>
          <div className="basic-1/4">email</div>
          <div className="basic-1/4 flex flex-row justify-between items-center">
            <div className="basic-1/3 m-5">fb</div>
            <div className="basic-1/3 m-5">insta</div>
            <div className="basic-1/3 m-5">in </div>
          </div>

   </div>

    </div>

  )
}

export default Navbar