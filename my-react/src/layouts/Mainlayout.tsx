import Navbar from "../components/Navbar"
import Navbar from "../components/Footer"
import { Outlet } from "react-rounter"
export default function Mainlayout() {
  return (
    <>
    <Navbar/>
    <div>
      <Outlet />
    </div>
    <Footer/>
    </>
  )
}
