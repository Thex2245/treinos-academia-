import './App.css'

function App() {

  let treinos = {
    monday: [
      ['Desenvolvimento Máquina', '4x10 repetições'], 
      ['Desenvolvimento Arnold', '4x10 repetições'],
      ['Elevação Lateral + Frontal (Alternado)', '4x10 repetições'], 
      ['Elevação Lateral Polia', '4x10 repetições'],
      ['Rosca Punho', '3x10 repetições'],
      ['Rosca Punho Inversa', '3x10 repetições'],
      ['Abdominal Remador', '3x10 repetições'],
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  }
  return (
    <div className='default-block'>
      
      {treinos.monday.map((exercise) => (
        <div className='exercise' key={exercise}>
          <div className="checkbox-wrapper-33">
            <label className="checkbox">
              <input className="checkbox__trigger visuallyhidden" type="checkbox" />
              <span className="checkbox__symbol">
                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
              <div>
                <h1 className="checkbox__textwrapper">{exercise[0]}</h1>
                <p className='description'>Repetições: {exercise[1]}</p>
              </div>
              
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
