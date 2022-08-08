import React from 'react';
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const UpdateModals = () => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>

            <div className='bg-[#112B3C]'>
                <button onClick={openModal} className=" color-801336 btn-sm btn">
                    {" "}
                    Update
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal} className="btn btn-sm btn-warning">
                        close
                    </button>
                    <div className='text-center font-semibold'><h1>Please Update your Text</h1></div>
                    <div className=" p-3 color-4D4C7D">
                        <form className="container bg-[#112B3C]" >

                            <div class="form-control lg:mx-52 mb-3">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    aria-label="Username"
                                    name="user_name"
                                    class="input form-control input-bordered w-full " />
                            </div>

                            <div class="form-control lg:mx-52">
                                <label class="input-group">
                                    <span>Your Notes</span>
                                    <textarea
                                        aria-label="With textarea"
                                        name="text"
                                        class="textarea form-control w-full textarea-bordered"
                                    ></textarea>
                                </label>
                            </div>


                            <div class="form-control mx-auto w-32 my-6">
                                <input type="submit" value="Submit" class="btn btn-success text-white" />
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>

        </>
    );
};

export default UpdateModals;