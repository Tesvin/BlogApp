import { MdDelete } from "react-icons/md"

const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
    <div className="flex items-center justify-between">
     <h3 className="font-bold text-gray-600">Author Name</h3>
     <div className="flex justify-center items-center space-x-4">
     
     <div className="flex items-center justify-center space-x-2">
                    <p className="cursor-pointer"><MdDelete/></p>
    </div>

     <p>12/2334/7</p>
     <p>12/12</p>
              
     </div>
    </div>
    <p className="px-4 mt-2">Good post</p>

    </div>
  )
}

export default Comment