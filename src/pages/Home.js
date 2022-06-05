import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatureImg from '../assets/feat.svg'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white pb-12'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>About the web app</p>

                    <Link to="/map">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Map</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="400" height="400" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatureImg} alt="img" width="500" height="500" />
                </div>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>The solo bagpackr is a web app where you can:</p>
                    <ul className="text-xl">
                        <li className="list-disc">Pin the locations you visited.</li>
                        <li className="list-disc">Chat with other people in various public chatrooms.</li>
                        <li className="list-disc">Share your memories with other people.</li>
                        <li className="list-disc">Send an SOS in case of any emergency</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
