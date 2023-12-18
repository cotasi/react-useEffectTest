import react from 'react';
import { useState } from 'react';
import gnbdata from './data/gnb.json';

function App() {
  const myfun = (v) => { alert(v);}
  const [tabvar,settab] = useState(0);

  return (
    <div>
      <ul className="d-flex">
      {
        gnbdata.map((e,i)=>{
          return(
            <>
              <li onClick={()=>{ myfun(i)}}>{e.product}</li>
              { tabvar === i &&  <div>
                      { i }
                                </div> }
            </>
          );
        })
      }
      </ul>
    </div>
  );
}

export default App;
