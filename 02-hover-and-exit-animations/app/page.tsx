import { GeistSans } from "geist/font/sans";
import Card from "./components/ui/Card";
export default function Home() {
  return (
    <div
      className={`${GeistSans.className} h-screen flex items-center justify-center bg-green-50`}
    >
      <Card />
    </div>
  );
}
