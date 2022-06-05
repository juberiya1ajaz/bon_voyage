import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatureImg from '../assets/feat.svg'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-black pb-12'>

            <div className='md:grid md:grid-cols-2 items-center  pt-10'>
                <div className='bg-green-200 border-2 border-r-8 border-b-8 border-black p-5 rounded-lg'>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl py-4 tracking-wider text-justify'>For many folks, there is one thing that is the epitome of self-indulgence, and that indulgence is none other than solo traveling. But Alas, for women and teenage solo travelers, it comes with many paranoid thoughts. It is tough to be a woman and a solo traveler simultaneously. To tackle this issue, We focused on developing a feasible solution for the safety of solo travelers throughout the brainstorming process.</p>

                    <Link to="/map">
                        <button className='bg-yellow-200 border-2 hover:bg-yellow-300 border-r-4 border-b-4 border-black text-black font-bold py-2 px-8 rounded-md text-xl md:text-2xl'>Map</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="400" height="400" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl  shadow-black">
                    <img src={FeatureImg} alt="img" width="500" height="500" />
                </div>
                <div className='bg-yellow-200 border-2 border-r-8 border-b-8 border-black p-10 rounded-lg  '>
                    <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'> The SØLØ BaGpackr is a web app where you can:
                    </p>
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