

export default function card(params){
    return(
        <div className="mt-20 ml-[2.5vw] w-[22vw] bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="" alt="random" className="w-full h-48 object-cover"
      
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-700 mt-2">This is a simple card component with a shadow effect.</p>
      
      <button className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:border-blue-500 ">Learn more</button>
      </div>
    </div>
    )
}