import './watching.scss'

export default function Watching(){
    return(
        <div className='background-pic'>
            <div className='images-watching'>
                <img className="app_logo" src='/assets/posters/bingeboxlogo.svg'/>
                <h2>Who is Watching?</h2>
                <div className='avatar-img'>
                    <button>
                        <img className="avatar" src="/assets/posters/avatar1.svg"/>Manisha
                    </button> 
                    <button>
                        <img className="avatar" src="/assets/posters/avatar2.svg"/>Naina
                    </button>
                    <button>
                        <img className="avatar" src="/assets/posters/avatar3.svg"/>Saurabh
                    </button>
                </div>
            </div>
        </div>
    )
} 