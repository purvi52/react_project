import './subscription.scss'

export default function Subscription() {
    return(
        <div className='background-image'>
            <div className='background2'>
                <div className='cards'>
                    <div className='logo-n-text'>
                        <div className='texts'>
                            <img className="subsLogo" src='/assets/posters/bingeboxlogo.svg'/>
                            <h1>"Unleash Your Movie Magic"</h1>
                            <div className='sub_line'> 
                            <p className='text'>Subscription Plans for Endless </p>
                            <p className='text_1'>Streaming Delight!</p>
                            </div>
                        </div>
                        <div className='Buy_Now'>
                            <div>
                                <h2 className='planname'>Premium</h2>
                                <div className='price'>
                                    <p className='rs'>Rs.</p>
                                    <p className='digit'>1499</p>
                                    <p className='yr'>/yr</p>
                                </div>   
                                <div>
                                    <p className='device'>4 device</p>
                                </div>
                                <div>
                                    <p className='resolution'>Resolution</p>
                                    <p className='res-detail'>4k (Ultra HD) + HDR</p>
                                </div>
                                <hr className='line' />
                                <div>
                                    <p className='quality'>Video Quality</p>
                                    <p className='q-detail'>Best</p>
                                </div>
                                <hr className='line'/>
                                <div>
                                    <p className='S-devices'>Supported device</p>
                                    <p className='typesof-devices'>Tv, Computer, Mobile, Tablet</p>
                                </div>
                                <button className='buy'>Buy Now</button>
                            </div>    
                        </div>
                        <div className='Buy_Now'>
                            <div>
                                <h2 className='planname'>Super</h2>
                                <div className='price'>
                                    <p className='rs'>Rs.</p>
                                    <p className='digit'>899</p>
                                    <p className='yr'>/yr</p>
                                </div>   
                                <div>
                                    <p className='device'>4 device</p>
                                </div>
                                <div>
                                    <p className='resolution'>Resolution</p>
                                    <p className='res-detail'>1080p</p>
                                </div>
                                <hr className='line' />
                                <div>
                                    <p className='quality'>Video Quality</p>
                                    <p className='q-detail'>Better</p>
                                </div>
                                <hr className='line'/>
                                <div>
                                    <p className='S-devices'>Supported device</p>
                                    <p className='typesof-devices'>Tv, Computer, Mobile, Tablet</p>
                                </div>
                                <button className='buy'>Buy Now</button>
                            </div>    
                        </div>
                        <div className='Buy_Now'>
                            <div>
                                <h2 className='planname'>Mobile</h2>
                                <div className='price'>
                                    <p className='rs'>Rs.</p>
                                    <p className='digit'>499</p>
                                    <p className='yr'>/yr</p>
                                </div>   
                                <div>
                                    <p className='device'>4 device</p>
                                </div>
                                <div>
                                    <p className='resolution'>Resolution</p>
                                    <p className='res-detail'>480p</p>
                                </div>
                                <hr className='line' />
                                <div>
                                    <p className='quality'>Video Quality</p>
                                    <p className='q-detail'>Good</p>
                                </div>
                                <hr className='line'/>
                                <div>
                                    <p className='S-devices'>Supported device</p>
                                    <p className='typesof-devices'>Mobile, Tablet</p>
                                </div>
                                <button className='buy'>Buy Now</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}