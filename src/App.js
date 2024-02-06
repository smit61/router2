
import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  const home = () => {
    navigate('/home')
  }
  const about = () => {
    navigate('/about')
  }
  const project = () => {
    navigate('/project')
  }

  const team = () => {
    navigate('/team')
  }

  const news = () => {
    navigate('/news')
  }

  const contact = () => {
    navigate('/contact')
  }


  return (


    <div >
      <div style={{ display: 'flex', alignItems: 'center', paddingInline: '50px' }}>
        <div style={{ width: '40%' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968762.png" height="70px" width="70px" />

        </div>



        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', gap: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>

            <img src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png" height="30px" width="30px" className='b' />
            <img src="https://cdn-icons-png.flaticon.com/128/0/191.png" height="30px" width="30px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px', gap: '50px' }}>
            <p>Click edit and create your own amizng website</p>


            <a href=''>read more</a>

            <button className='a'>Edit this site</button>
          </div>

        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{display:'flex'}}>
            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828819.png" height="20px" width="20px" />
            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png" height="20px" width="20px" />
            <img src="https://cdn-icons-png.flaticon.com/128/7189/7189683.png" height="20px" width="20px" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <h2 style={{ margin: '0'}}>ChoosEquality</h2>
            <h5 style={{ margin: '0'}}>Education for all</h5>
          </div>

        </div>


        <div style={{ display: 'flex', gap: "60px", }}>
          <button onClick={() => home()}>Home</button>
          <button onClick={() => about()}>About</button>
          <button onClick={() => project()}>Project</button>
          <button onClick={() => team()}>Team</button>
          <button onClick={() => news()}>News</button>
          <button onClick={() => contact()}>Contact</button>

        </div>
      </div>
    </div>
  );
}

export default App;
