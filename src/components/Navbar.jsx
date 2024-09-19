import React from 'react'
import Logout from './Logout'

const Navbar = () => {

    return (

       <div className="fixed  justify-center gap-10 flex w-full bg-orange-200">
        <h1>
            Navbar
        </h1>

        <Logout />
       </div>

    )
}

export default Navbar