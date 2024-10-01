import { useState } from "react"
// import PdfRender from "./components/PdfRender";
import{ lazy, Suspense } from 'react';
const MyLazyComponent = lazy(() => import('./components/PdfRender'));


function App() {
  const [render,setRender] = useState(false);
  // const pdfUrl = "https://file-examples.com/storage/fecf122cd366fad119b983a/2017/10/file-sample_150kB.pdf";
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center p-4 m-10">
        <button onClick={() => setRender(true)} className="border rounded-lg p-2 hover:bg-black-500">Click me to Read the Agreement</button>
        <div>
          {render && <PdfRender />}
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center p-4 m-10">
        <button onClick={() => setRender(true)} className="border rounded-lg p-2">Click me</button>
        <div>
          {render && <Suspense fallback={<div>Loading...</div>}><MyLazyComponent /></Suspense>}
        </div>
      </div>
      
    </>
  )
}

export default App
