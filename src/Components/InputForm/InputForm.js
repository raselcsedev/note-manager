import React from 'react';

const InputForm = ({handlePost}) => {
    return (
        <>
            <div className=" p-3 bg-[#0a5588] color-4D4C7D">
                <form className="container " onSubmit={handlePost} >

                    <div class="form-control lg:mx-52 my-6">
                        <input
                            type="text"
                            placeholder="Your Name" 
                            aria-label="Username"
                            name="user"
                            class="input form-control input-bordered w-full " />
                    </div>

                    <div class="form-control lg:mx-52">
                        <label class="input-group">
                            <span>Your Notes</span>
                            <textarea 
                            aria-label="With textarea"
                            name="textData"
                            class="textarea form-control w-full textarea-bordered"
                             ></textarea>
                        </label>
                    </div>


                    <div class="form-control mx-auto w-32 my-6">
                        <input type="submit" value="Submit" class="btn btn-success text-white" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default InputForm;