import './CSS/App.min.css';
// import axios from 'axios';
// import { useEffect } from 'react';
import IndexRouter from './router/IndexRouter';

function App() {

  // useEffect(()=>{
  //   axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=CA784160093811EC8C7CF53920300F044C4DB2FE7FBE4254B4C91F97D6FC2495&optimus_risk_level=71&optimus_code=10").then(res=>{
  //     console.log(res.data)
  //   })
  // })

  return (
    <div className="App">
      <IndexRouter></IndexRouter>
    </div>
  );
}

export default App;
