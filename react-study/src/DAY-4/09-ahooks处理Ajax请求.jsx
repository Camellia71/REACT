import { useRequest } from "ahooks";

async function getData() {
    
}

function App() {
    const { data, error, loading } = useRequest(service);
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    )
}