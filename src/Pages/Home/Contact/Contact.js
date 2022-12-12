import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40dth0u",
        "template_uq6zpkz",
        form.current,
        "ZU1FthsETxfL7DYEO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg")`,
      }}
      className="container mx-auto"
      id="contact"
    >
      <div className="bg-[#E5FBD7] bg-opacity-80 py-20">
        <h1 className="text-4xl font-bold text-center mb-7 text-[#facf0f]">Contact</h1>
        <p className="text-center w-1/2 mx-auto text-xl text-gray-600 mb-10">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          className="bg-white p-7 w-4/5 lg:w-1/2 mx-auto rounded-lg"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3 mb-4">
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Full Name</span>
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold">Email</span>
              </label>
              <input
                name="user_email"
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="font-semibold">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="font-semibold">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="form-control">
            <input
              className=" py-3 px-7 rounded-lg font-bold bg-[#facf0f] w-32 hover:cursor-pointer"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
