//，默认情况下，如果应用程序在渲染过程中出错，react将从屏幕上移除该组件的树，为了防止这种情况的出现，
// 我们可以将UI的一部分包裹到错误边界中，错误边界是一种特殊组件，可以显示一些后备UI而不是崩溃的部分，例如错误信息

import className from "classnames";
import ErrorBoundary from "react-error-boundary";
function Head() {
    className();
    return <div>Hello, Head!</div>;
}
function App() {
    return (
        <div>
            <ErrorBoundary fallback={<div>出错了</div>}>
                <Head />
            </ErrorBoundary>
        </div>
    )
}
export default App