import React from 'react';

const InputForm = () => {
    return (
        <>
            <div className=" p-3 color-4D4C7D">
                <form className="container " >

                    <div class="form-control lg:mx-52 my-6">
                        <input type="text" placeholder="Your Name" class="input input-bordered input-sm w-full " />
                    </div>

                    <div class="form-control lg:mx-52">
                        <label class="input-group">
                            <span>Your Notes</span>
                            <textarea class="textarea w-full textarea-bordered" ></textarea>
                        </label>
                    </div>


                    <div class="form-control mx-auto w-20 my-6">
                    <input type="submit" value="Submit" class="btn btn-info text-white" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default InputForm;