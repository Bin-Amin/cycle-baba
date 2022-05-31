import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>

            <div className="card bg-dark text-dark border-0 mb-3">
                <img src="/assets/bg-2.png" className="card-img" alt="Background" height={'650px'} />
                {/* <div className="card-body"> */}

                <div className='card-img-overlay d-flex flex-column justify-content-center'>
                    <h5 className="card-title display-3 fw-bolder mb-0 text-center">Welcome to Cycle Baba</h5>
                    <p className="card-text lead fs-2 fw-bold text-center">
                        Check Out For All New Cycle
                    </p>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home