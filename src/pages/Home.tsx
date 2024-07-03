import './styles/home.css'
const Home = () =>{


    return (
        <div className="home">
            <div className='content'>
                <p>Welcome to <span>Test Web</span></p>
                <img src="src/assets/cat.png" alt="" />
            </div>
            <button> <a href="/dashboard">GO</a>  </button>
           
        </div>
    )

}

export default Home;