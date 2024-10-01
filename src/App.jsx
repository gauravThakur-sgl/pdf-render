import { useState } from "react"

function PdfRender() {
  return(
    <div className="max-md:h-screen max-md:w-auto">
      <iframe src="https://drive.google.com/file/d/1r_RHnd9cw6fNJv3zmO_8B6Kpn72k7vAz/preview?usp=sharing"
        height={900} width={800}
      >
      </iframe>
    </div>
  )
}
function App() {
  const [render,setRender] = useState(false);
  // const pdfUrl = "https://file-examples.com/storage/fecf122cd366fad119b983a/2017/10/file-sample_150kB.pdf";
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 m-10">
        <button onClick={() => setRender(true)} className="border rounded-lg p-2 hover:bg-black-500">Click me to Read the Agreement</button>
        <div>
          {render && <PdfRender />}
        </div>
      </div>
    </>
  )
}

export default App
