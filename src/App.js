import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increaseCount, decreaseCount,addColor, addColorBox} from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const {count, color, boxColor} =  useSelector( state => state)

  return (
    <div className="App">
      <div className="main-box text-center">
        <h1>Count</h1>
        <h3>
          {count}
        </h3>
        <div className="form-input-button">
          <input type="text" 
                placeholder="color" 
                onChange={(e) => dispatch(addColor(e.target.value))}
                />
          <button   
              onClick={()=> dispatch(increaseCount(count))}
              className="button increment">Increment</button>
          <button 
              onClick={()=> dispatch(decreaseCount(count))}
              className="button increment">Decrement</button>
        </div>
      </div>
      <div className="box-list">
          {Array.from(Array(count)).map((c, idx) => {
            return <div className="box" style={{ backgroundColor: boxColor[idx] || color || "#ccc" }} key={idx}>
              <h1 className="text">Box {idx + 1}</h1>
              <input type="text" 
                    className="input" 
                    value={boxColor[idx]}
                    onChange={(e) => {
                      dispatch(addColorBox(e.target.value, idx))
                    }}
                    />

            </div>;
          })}

      </div>
    </div>
  );
}

export default App;
