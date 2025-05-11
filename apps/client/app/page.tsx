import Appbar from "@/components/appbar";
import ChatUI from "@/components/chatUI";
import OfficeGame from "@/components/OfficeGame";
// import { OfficeScene } from "@/components/officeScene";

export default function Home() {
  return (
    <div>
      <Appbar />
      <OfficeGame />
      <ChatUI />
    </div>
  );
}
