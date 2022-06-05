import React from 'react'
import FamilyImg from '../assets/family.svg'
import FriendsImg from '../assets/friends.svg'
import TravelImg from '../assets/Paris.svg'
import HotelImg from '../assets/hotels.svg'
import RestaurentImg from '../assets/review.svg'
import { Link } from 'react-router-dom'

export default function Chatroom() {
    return (
        <div className="min-h-screen">

            <div className="grid w-full py-10 place-items-center ">
                <h1 className="p-3 rounded-lg bg-orange-300 text-5xl text-center  border-r-8 border-b-8 border-black tracking-wide lg:text-6xl text-black font-bold">
                    Chatroom
                </h1>
            </div>

            <div className="grid grid-cols-3 w-full px-16 py-4 pb-16">

                <div className="m-8">
                    <Link to="/chat/family">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-black rounded-lg">
                                <img width="280" height="280" src={FamilyImg} alt="" className="rounded-t-md p-2" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl font-bold text-black">Family Group</div>
                        </div>
                    </Link>
                </div>

                <div className="m-8">
                    <Link to="/chat/friends">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-black rounded-lg">
                                <img width="280" height="280" src={FriendsImg} alt="" className="rounded-t-md p-2" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl  font-bold text-black">Friends Group</div>
                        </div>
                    </Link>
                </div>

                <div className="m-8">
                    <Link to="/chat/stories">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-black rounded-lg">
                                <img width="280" height="280" src={RestaurentImg} alt="" className="rounded-t-md p-2" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl   font-bold text-black">Stories</div>
                        </div>
                    </Link>
                </div>

                <div className="m-8">
                    <Link to="/chat/hotel">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-black rounded-lg">
                                <img width="280" height="280" src={HotelImg} alt="" className="rounded-t-md p-2" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl    font-bold text-black">Hotel</div>
                        </div>
                    </Link>
                </div>

                <div className="m-8">
                    <Link to="/chat/places">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-black rounded-lg">
                                <img width="280" height="280" src={TravelImg} alt="" className="rounded-t-md p-2" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl     font-bold text-black">Places you must visit</div>
                        </div>
                    </Link>
                </div>

                <div className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-black rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-black">+ Add room</div>
                    </div>
                </div>

            </div>

        </div>
    )
}