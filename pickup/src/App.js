import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home";
import Messages from "./components/messages";
import Notifications from "./components/notifications";
import Account from "./components/account";
import NewPost from "./components/newpost";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{display: "flex"}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="messages" element={<Messages />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="account" element={<Account />} />
            <Route path="newpost" element={<NewPost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}