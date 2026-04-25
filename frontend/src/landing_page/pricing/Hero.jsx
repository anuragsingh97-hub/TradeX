import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <h2 className='mt-5'>Charges</h2>
                <p className='fs-5 text-muted'>List of all charges and taxes</p>
                <div className="col-4 mt-5">
                    <img style={{height:'200px'}} src="media/images/pricing0.svg" alt="" />
                    <h2 className='mb-4' >Free equity delivery</h2>
                    <p className='text-muted lh-lg'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5">
                    <img style={{height:'200px'}} src="media/images/intradayTrades.svg" alt="" />
                    <h2 className='mb-4'>Intraday and F&O trades</h2>
                    <p className='text-muted lh-lg'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5">
                    <img style={{height:'200px'}} src="media/images/pricing0.svg" alt="" />
                    <h2 className='mb-4'>Free direct MF</h2>
                    <p className='text-muted lh-lg'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;