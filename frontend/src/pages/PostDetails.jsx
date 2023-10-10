import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'



const PostDetails = () => {

    



  return (
    <div>
    <NavBar />
    <div className="h-[80vh] flex justify-center items-center w-full"></div> <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl"></h1>
         <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer"><BiEdit/></p>
            <p className="cursor-pointer"><MdDelete/></p>
         </div>
         </div>

    <div className="flex items-center justify-between mt-2 md:mt-4">
    <p>@podtbem</p>
   <div className="flex space-x-2">
   <p>34/23/44</p>
   <p>12/12/2021</p>
   </div>
    </div>
    <img src="" className="w-full  mx-auto mt-8" alt=""/>
     <p className="mx-auto mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi beatae itaque quas veniam iste perspiciatis fugiat, eaque quae similique ipsa fuga recusandae, minima blanditiis commodi quis magni libero, molestias et. </p>
     <div className="flex items-center mt-8 space-x-4 font-semibold">
      <p>Categories:</p>
      <div className="flex justify-center items-center space-x-2">
      
        
      </div>
     </div>
     <div className="flex flex-col mt-4">
     <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
     
       
     </div>
     {/* write a comment */}
     <div className="w-full flex flex-col mt-4 md:flex-row">
      <input  type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
      <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
     </div>
    </div>
    <Footer/>
</div>
  )
}

export default PostDetails