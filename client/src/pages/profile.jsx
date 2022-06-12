import React from 'react'
import { isUserLoggedIn } from '../firebase/auth'


function Profile() {
    const [loggedIn, updateStatus] = React.useState(false)
    
    React.useEffect(() => {
        updateStatus(isUserLoggedIn())
    }, [])
    

    
    return (
        <>
            {loggedIn ? (
                // LOGGED IN
                <p>You're allowed on this page</p>
            ) : (
                // LOGGED OUT
                <p>You're allowed on this page</p>
            )}
        </>
    )
    
    
}

export default Profile