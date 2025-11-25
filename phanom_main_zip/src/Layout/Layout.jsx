import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div className="max-w-[1500px] mx-auto ">
//       <Navbar />
//       <main className="min-h-screen mx-auto">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

export default function Layout() {
  return (
    <div className="max-w-[1500px] mx-auto "> 
      {/* px-4 taaki chhoti screen par thoda padding ho */}
      <Navbar />
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
