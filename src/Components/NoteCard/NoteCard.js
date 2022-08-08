import React from 'react';
import UpdateModals from '../UpdateModals/UpdateModals';
/* import {
  DesktopComputerIcon
} from "@heroicons/react/solid"; */

/* const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
}; */

const NoteCard = ({ note, handleDelete,isReload,setIsReload }) => {
  return (
    <>

      <div className="col mt-5" style={{ position: "relative" }}>
        <div className="rounded h-100 color-060930 m-12 note-card ">
          
          <div className="card-footer grid lg:mx-64 sm:gap-12 lg:gap-4 justify-content-center">
            <div className="bg-[#112B3C] px-5 py-8 text-white flex flex-col items-center justify-center relative rounded-lg">
              <p className="flex justify-center absolute top-[-35px]">
                <span className="bg-[#F66B0E] font-bold text-3xl uppercase p-4 rounded w-20 text-center">
                {note.user.substring(0, 1)}
                </span>
              </p>
              <div className="h-40 ">
                <h1 className="text-2xl text-success font-bold text-center mt-3 ">
                Author : { note.user}
                </h1>
                <p className="text-gray-300 font-semibold mt-3 text-center">
                {note.textData}
                </p>
                <div className='flex justify-center my-4'>

                  <div className='flex justify-center mr-4'>
                    <button
                      className="color-801336 btn btn-sm"
                      onClick={() => handleDelete(note._id)}

                    >
                      delete
                    </button>
                  </div>
                  <UpdateModals setIsReload={setIsReload} isReload={isReload} id={note._id} />

                </div>

              </div>
            </div>





            {/* <button>update</button> */}

          </div>
        </div>
      </div>

    </>
  );
};

export default NoteCard;