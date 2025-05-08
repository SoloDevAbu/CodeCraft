import Appbar from "@/components/appbar";
import ChatUI from "@/components/chatUI";
import { OfficeScene } from "@/components/officeScene";

export default function Home() {
  return (
    <div>
      <Appbar />
      <OfficeScene />
      <ChatUI />
    </div>
  );
}
