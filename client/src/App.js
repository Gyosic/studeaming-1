import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signinModalOpen } from "./store/actions/index";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Streamer from "./pages/Streamer";
import Viewer from "./pages/Viewer";
import Modal from "./components/Modal";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
require("dotenv").config();

function App() {
  const { isSignupOpen, isSigninOpen } = useSelector(
    ({ modalReducer }) => modalReducer
  );
  const isModal = isSignupOpen || isSigninOpen;
  const dispatch = useDispatch();

  const signinHandler = () => {
    dispatch(signinModalOpen(true));
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={signinHandler}>모달</button>
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/streamer" element={<Streamer />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes> */}
      {isModal && (
        <Modal>
          {isSignupOpen && <Signup />}
          {isSigninOpen && <Signin />}
        </Modal>
      )}
    </>
  );
}

export default App;
