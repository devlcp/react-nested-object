import { useState } from 'react'

import './App.css'

function App() {
    const [user, setUser] = useState({
        name: 'Leo',
        last_name: 'Cen',
        age: 10,
        date: '2021-10-02',
        address: {
            calle: 'Victus',
            number: 22,
            colonia: 'Buenavista'
        },
        test: {
            name: 'Sandra',
            number: 4        
        }
    })

    const handleEditUser = (e) => {
        const {name, value} = e.target;
        const newState = setStateNested(user, name, value)
    
        setUser({
            ...newState
        })
    }

    const setStateNested = (state, name, value) => {
        let operativeState = state
        const nameArray = name.split('.')

        if(nameArray.length > 1){
            operativeState[nameArray[0]] = {
                ...operativeState[nameArray[0]],
                [nameArray[1]]: value
            } 
        } else {
            operativeState[nameArray[0]] = value;
        }

        return state;
    }

    return (
        <div className="App">
            <div>
                <input name='name' value={user.name} onChange={handleEditUser} />
                <input name='last_name' value={user.last_name} onChange={handleEditUser} />
                <input name='age' value={user.age} onChange={handleEditUser} />
                <label>Address</label>
                <input name='address.calle' value={user.address.calle} onChange={handleEditUser} />
                <input name='address.number' value={user.address.number} onChange={handleEditUser} />
                <input name='address.colonia' value={user.address.colonia} onChange={handleEditUser} />
                <label>Test</label>
                <input name='test.name1' value={user.test.name} onChange={handleEditUser} />
                <input name='test.number1' value={user.test.number} onChange={handleEditUser} />
                <br />
                <input name='date' type='date' value={user.date} onChange={handleEditUser} />
            </div>

            <hr />
            { JSON.stringify(user) } 
        </div>
    )
}

export default App
