
const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <h1 className="text-red-600 text-4xl">NETFLIX</h1>
        <div className="flex gap-10">
            <button className="text-white">Sign In</button>
            <button className="bg-red-600 text-white px-6 py-2 rounded">Sign Up</button>
        </div>
      
    </div>
  )
}

export default NavBar
