# Context API 

1. Create **context** folder.

2. Create a **".js"** file inside the folder. _e.g. **UserContext.js**_.

3. Create a context 
    ```js
    const UserContext = React.createContext( )
    export default UserContext; 
    ```

4. Create a context provider ".jsx" file.
    ```
    import UserContext from "./UserContext"
    const UserContextProvider = ( { children} ) => {
        return (
            <UserContext.Provider value={{ "state variables" }}> 
                {children}
            </UserContext.Provider> )
        }

        export default UserContextProvider
    ```