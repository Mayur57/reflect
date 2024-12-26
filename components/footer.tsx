import Image from "next/image";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center w-full p-4 text-xs text-white/60">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-white font-light text-xs">
            <span className="tracking-wider">v1.0.0</span> • With{" "}
          <Image
            className="inline h-3 w-3 mx-[3px]"
            alt="heart emoji"
            src="/heart.png"
            height={100}
            width={100}
          />{" "}
          by{" "}
          <a
            href="https://mayurbhoi.com"
            target="_blank"
            className="underline decoration-[0.5px] underline-offset-4 decoration-dotted hover:decoration-[1px] hover:decoration-solid"
          >
            Mayur Bhoi
          </a>
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
        <p>CC BY-NC 4.0 © {new Date().getFullYear()}</p>
          <a>Privacy</a>
          <a>FAQ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
