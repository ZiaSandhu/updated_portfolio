"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Info() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
const [loading,setLoading] = useState(false)
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      let {data} = await axios.post('/api/contact',input)
      if(data.success){
        toast("Your message has been deliverd.", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#1d1d1d",
            color: "#c8f31d",
          },
        });
        var inputData = {...input}
        setInput({ name: "", email: "", message: "", subject: "" });
      }
      else{
        toast("Something went wrong!", {
          style: {
            borderRadius: "10px",
            background: "#1d1d1d",
            color: "#c8f31d",
          },
        });
      }
    } catch (error) {
      toast("Something went wrong!", {
        style: {
          borderRadius: "10px",
          background: "#1d1d1d",
          color: "#c8f31d",
        },
      });
    }finally{
      setLoading(false)
    }

    await axios.post('/api/sendmail',inputData)

  };

  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let is make your brand brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href="#0" className="main-color">
                +92 317 455957
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Facebook</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Twitter</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="#0" className="hover-this">
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#0" className="hover-this">
                  <span className="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form onSubmit={handleSubmit}>
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      value={input.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={input.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                      value={input.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mt-30">
                    <button type="submit" disabled={loading}>
                      {!loading ? (
                        <span className="text">Send A Message</span>
                      ) : (
                        <span className="text">Sending</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
