import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="flex justify-end py-5 border-b-2-white gap-5 items-center ">
      <div className=" text-9xl text-slate-50/5 font-bold absolute left-5 top-0 ">
        The NEXT Blog
      </div>
      <div className="border-b-2 border-white flex gap-5 items-center  pb-3 ">
        <div className="bg-white px-5 py-2 rounded-lg">
          <Link href="/">
            <h1 className="text-black text-lg">NEXT JS BLOG</h1>
          </Link>
        </div>

        <ul className="text-white flex gap-5">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );

  return (
    <html>
      <head />
      <body className="bg-neutral-900 mx-24 my-10">
        {header}
        {children}
      </body>
    </html>
  );
}
