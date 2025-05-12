import Appbar from "@/components/appbar";
import ChatUI from "@/components/chatUI";
import OfficeGame from "@/components/OfficeGame";

export default function Home() {
  return (
    <div>
      <Appbar />
      <OfficeGame />
      <ChatUI />
    </div>
  );
}
