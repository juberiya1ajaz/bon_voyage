import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Chatroom from '../pages/Chatroom'
import FamilyChatroom from '../pages/family/Chatroom'
import FriendsChatroom from '../pages/friends/Chatroom'
import StoriesChatroom from '../pages/stories/Chatroom'
import HotelChatroom from '../pages/hotel/Chatroom'
import PlacesChatroom from '../pages/places/Chatroom'

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chatroom />} />
                <Route path="/chat/family" element={<FamilyChatroom />} />
                <Route path="/chat/friends" element={<FriendsChatroom />} />
                <Route path="/chat/stories" element={<StoriesChatroom />} />
                <Route path="/chat/hotel" element={<HotelChatroom />} />
                <Route path="/chat/places" element={<PlacesChatroom />} />
            </Routes>
        </BrowserRouter>
    )
}
