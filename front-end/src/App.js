import React, { useEffect, useState } from "react";

function App() {

  const [resp1, setResp1] = useState(null)
  const [resp2, setResp2] = useState(null)

  async function fetchFromBackEnd1(){
    const url = 'http://back-end-1'
    fetch(url).then(res=>res.text()).then((data)=>{
      setResp1(data)
    }).catch(e=>console.warn(e))
  }

  async function fetchFromBackEnd2(){
    const url = 'http://back-end-2'
    fetch(url).then(res=>res.text()).then((data)=>{
      setResp2(data)
    }).catch(e=>console.warn(e))
  }

  useEffect(()=>{
    fetchFromBackEnd1()
    fetchFromBackEnd2()
  },[])

  return (
    <>
      {resp1??null}
      {resp2??null}
    </>
  );
}

export default App;
