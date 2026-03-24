import ListContent from "./13-2-ListContent";
import ListHead from "./13-1-ListHead";
import ListProvider from "./13-3-ListProvider";

function App() {
    return (
        <div>
            hello App
            <ListProvider>
                <ListHead />
                <ListContent />
            </ListProvider>
        </div>
    )
}
export default App