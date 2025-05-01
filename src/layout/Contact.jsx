import React from "react";
// import { useState } from "react";
import toast from "react-hot-toast";
function Contact() {
  //   const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bbec31f4-2289-489b-ae06-682d0d910537");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      //   setResult("Form Submitted Successfully");
      toast('SuccessFully Submitted!',
        {
          icon: '✅',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
      event.target.reset();
    } else {
      console.log("Error", data);
      toast('Something went wrong!',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Let's Get In Touch!</h2>
        <p className="text-[#a755f7]">
          The first step to a great collaboration starts here.
        </p>
        <div className="border-b border-neutral-500 border-dashed pb-4"></div>
      </div>

      <div className=" mt-5 ">
        <div className="p-2 md:p-4 h-full bg-transparent border border-neutral-700 col-span-2">
          <form onSubmit={onSubmit}>
            {/* form top part containing mail icon and heading  */}
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
              {/* heading  */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#a755f7]">
                Send Me A Message
              </h2>

              {/* mail icon */}
            </div>

            {/* bottom form with input fields  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-8 md:px-8 text-sm">
              {/* name input  */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Name <span className="text-red-500">&#42;</span>
                </label>
                <input
                  className="border-[1px] border-neutral-700 bg-transparent p-2 rounded-md"
                  placeholder="Enter Your Name"
                  required
                  name="name"
                  type="text"
                />
              </div>

              {/* email input  */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Email <span className="text-red-500">&#42;</span>
                </label>
                <input
                  className="border-[1px] border-neutral-700 bg-transparent p-2 rounded-md"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  type="email"
                />
              </div>

              {/* subject input  */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Subject <span className="text-red-500">&#42;</span>
                </label>
                <input
                  className="border-[1px] border-neutral-700 bg-transparent p-2 rounded-md"
                  placeholder="Enter Your Subject"
                  required
                  name="subject"
                  type="text"
                />
              </div>

              {/* message input  */}
              <div className="flex flex-col gap-1 md:col-span-2 h-50 w-full">
                <label className="font-semibold">
                  Message <span className="text-red-500"> &#42;</span>
                </label>
                <textarea
                  className="border-[1px] border-neutral-700 bg-transparent px-2 py-10 rounded-md"
                  placeholder="Enter Your Message"
                  required
                  name="message"
                  type="text"
                ></textarea>
              </div>
            </div>

            {/* submit button div  */}
            <div className="flex items-center justify-center md:justify-end py-4 px-8">
              {/* submit button  */}
              <button
                type="submit"
                className="py-2 px-4 md:py-3 md:px-6 bg-[#a755f7] rounded-full cursor-pointer flex items-center gap-2 hover:scale-95 transition-all"
              >
                <span className="text-xl">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
