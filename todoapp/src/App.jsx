import { Provider } from "react-redux"
import store from "./redux/store"
import Todo from "./components/Todo"


function App() {
  

  return (
    
    
    <Provider store={store}>
   <Todo></Todo>
    </Provider>
  )
}

export default App
