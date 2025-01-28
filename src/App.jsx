import { Navbar } from "./Components/Navbar";
export default function App() {
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-sky-300 selection:text-sky-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar></Navbar>
      </div>
    </div>
  );
}
