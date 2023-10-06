import { createContext, useState } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [pathName, setPathName] = useState('')
  const handlePathName =(name)=>{
    setPathName(name)
  }
  const authInfo = {
    pathName,
    handlePathName,
  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;