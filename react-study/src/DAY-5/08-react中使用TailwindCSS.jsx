//TailwindCSS的优点：只书写HTML，利用css原子化的思想，有统一的风格，构建体积很小，组件驱动开发
export default function App() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div className="w-60 first-line:bg-slate-400 first-line:hover:bg-red-500">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
            </div>
        </div>
    )
}
