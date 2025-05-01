import SignIn from "@/components/sign-in";
import styles from "./page.module.css";
import { prisma } from "@repo/db";
import AppBar from "@/components/app-bar";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className={styles.page}>
        
      </div>
    </div>
  );
}
