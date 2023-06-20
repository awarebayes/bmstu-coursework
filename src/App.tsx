import { io, Socket } from "socket.io-client";
import { CHAT_SERVER_URL } from "./env";

const Lul = () => {
  return <img src="Lul.webp" alt="lul" width={24} />;
};

const connectToServer = () => {
  const socket = io(CHAT_SERVER_URL);
  console.log("Connected", socket.connected);
  socket.on("msg", (data) => console.log("Got message:", data));
  return socket;
};

const sendMessage = (socket: Socket) => {
  socket.emit("message_sent", "hello this is a message");
};

export default function App() {
  // connectToServer();
  return (
    <>
      <p className="text-center text-2xl text-purple-600 mt-4">
        My awesome twitch chat <Lul />
      </p>
      <p className="text-center text-lg text-purple-300">
        Interview task by ItGroup42
      </p>
    </>
  );
}
