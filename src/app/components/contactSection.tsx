import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-2 mt-4 p-6">
      <div className="mt-2">
        <h2 className="flex flex-row justify-center items-center text-white text-4xl font-bold font-mono">
          Let{"'"}s Connect
        </h2>
        <p className="font-mono mt-6 text-lg text-white flex flex-row justify-center items-center rounded text-left">
          Every new connection is a door to new opportunities. Whether you have
          a question or just want to connect, don{"'"}t hesitate—feel free to
          reach outs !
        </p>
        <div className="flex flex-row justify-center mt-4">
          <Link href="https://github.com/PeammaeP">
            <FontAwesomeIcon className="mt-4" size="3x" icon={faGithub} />
          </Link>
          <Link href="https://www.linkedin.com/in/peammiiz/">
            <FontAwesomeIcon
              className="mt-4 px-6 ml-2"
              size="3x"
              icon={faLinkedin}
            />
          </Link>
          <Link href="https://medium.com/@peemmygg">
            <FontAwesomeIcon className="mt-4 px-1" size="3x" icon={faMedium} />
          </Link>
        </div>
      </div>
      <Image
        src="/images/statue.png"
        alt="status"
        width={550}
        height={400}
        className="ml-10 rounded-t-xl rounded-b-xl hover:-translate-y-3"
      ></Image>
      <div className="flex flex-row mt-2 gap-2"></div>
    </div>
  );
};

export default ContactSection;
