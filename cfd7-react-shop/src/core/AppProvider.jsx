import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

function AppProvider({store,children}) {
    return (
        <Router>
            <Provider store={store}>
                {children}
            </Provider>
        </Router>
    )
}

export default AppProvider
