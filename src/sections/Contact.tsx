import { MdLocationPin, MdPhoneIphone, MdEmail } from "react-icons/md";
import { FormEvent, useState } from "react";
import { styles } from "../styles";
import data from "../constants/data";

type Props = {};
function Contact({}: Props) {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [error, setError] = useState<string>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();

    if (!name) {
      return setError("Name is required.");
    }
    if (!email) {
      return setError("Email is required.");
    }
    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      return setError("Email is not valid.");
    }
    if (!message) {
      return setError("Message is required.");
    }

    e.currentTarget.submit();
    console.log(email, name, message);
  };

  return (
    <section id="contact" className={`${styles.sectionWrapper}`}>
      <div className={`${styles.section}`}>
        <h2 className={`${styles.heading2} mb-10`}>Contact Me</h2>
        <div className="flex w-full flex-row justify-between gap-x-10 rounded-lg bg-primary p-20">
          <div className="basis-1/3">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-4 text-white">
                <MdLocationPin size={20} />
                <span>{data.info.Location}</span>
              </div>
              <div className="flex flex-row gap-x-4 text-white">
                <MdEmail size={20} />
                <span>{data.info.Email}</span>
              </div>
              <div className="flex flex-row gap-x-4 text-white">
                <MdPhoneIphone size={20} />
                <span>{data.info.Phone}</span>
              </div>
            </div>
          </div>
          <div className="basis-2/3 bg-extra-light-gray p-10">
            <form
              onSubmit={(e) => onSubmit(e)}
              target="_blank"
              action="https://formsubmit.io/send/614d956a-220b-48bd-9620-b7bdb6fe8aaf"
              method="POST"
            >
              <input name="_formsubmit_id" type="text" className="hidden" />
              <div className="mb-8 flex flex-col text-black">
                <label
                  htmlFor="name"
                  className="mb-2 text-[18px]  font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  className="rounded-[5px] border-2 border-primary px-4 py-2 text-primary outline-none focus:border-secondary"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-8 flex flex-col text-black">
                <label
                  htmlFor="email"
                  className="mb-2 text-[18px]  font-semibold"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email"
                  className="rounded-[5px] border-2 border-primary px-4 py-2 text-primary outline-none focus:border-secondary"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-8 flex flex-col text-black">
                <label
                  htmlFor="message"
                  className="mb-2 text-[18px]  font-semibold"
                >
                  Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  required
                  placeholder="Leave me a message"
                  className="rounded-[5px] border-2 border-primary px-4 py-2 text-primary outline-none focus:border-secondary"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="">
                {error && (
                  <p className="mb-4 rounded-md bg-amber-200 px-4 py-3 font-semibold">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-black p-4 text-[18px] font-semibold text-white duration-300 ease-in-out hover:bg-light-blue "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
