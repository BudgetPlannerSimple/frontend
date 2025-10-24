import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState();

    const api = axios.create({
        baseURL: "",
        timeout: 10000,
        headers: {
            Accept: "application/json",
        },
    });

    let a = async () => {
        const res = await api.get("/");
        setData(res.data);
    }

    useEffect(() => {
        a().then(r => console.log('Done'));
    },[])


    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                </a>
                <a href="https://react.dev" target="_blank">
                </a>
            </div>
            <h1 className={'border-violet-400 border-5 rounded'}>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                {data}
            </p>
        </>
    )
}

export default App
