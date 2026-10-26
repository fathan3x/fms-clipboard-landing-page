import "@fontsource/bai-jamjuree";
import "@fontsource/bai-jamjuree/500.css";

import bgDesktop from "./assets/bg-header-desktop.png";
import bgMobile from "./assets/bg-header-mobile.png";
import logo from "./assets/logo.svg";
import computer from "./assets/image-computer.png";
import devices from "./assets/image-devices.png";
import blacklist from "./assets/icon-blacklist.svg";
import preview from "./assets/icon-preview.svg";
import text from "./assets/icon-text.svg";
import google from "./assets/logo-google.png";
import ibm from "./assets/logo-ibm.png";
import microsoft from "./assets/logo-microsoft.png";
import hp from "./assets/logo-hp.png";
import vectorGraphics from "./assets/logo-vector-graphics.png";

export function App() {
  return (
    <main className="relative font-['Bai_Jamjuree']">
      <img src={bgDesktop} className="hidden lg:block w-full absolute top-0" />
      <img src={bgMobile} className="block lg:hidden w-full absolute top-0" />
      <section className="px-6 pt-20 lg:pt-40 flex flex-col items-center justify-center gap-20">
        <div className="max-w-20 lg:max-w-30 mx-auto">
          <img src={logo} className="w-full h-full" />
        </div>
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-center font-bold text-[hsl(210,10%,33%)] text-2xl lg:text-4xl">
            A history of everything you copy
          </h2>
          <p className="text-center text-sm lg:text-base text-[hsl(201,11%,66%)]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="bg-[hsl(171,66%,44%)] shadow-[0px_5px_0px_0px_hsl(168,66%,37%)] text-white px-4 py-3 w-50 rounded-full drop-shadow-2xl cursor-pointer hover:opacity-80">
            <p style={{ fontWeight: 500 }}>Download for IOS</p>
          </button>
          <button className="bg-[hsl(233,100%,69%)] shadow-[0px_5px_0px_0px_hsl(233,64%,58%)] text-white px-4 py-3 w-50 rounded-full drop-shadow-2xl cursor-pointer hover:opacity-80">
            <p style={{ fontWeight: 500 }}>Download for Mac</p>
          </button>
        </div>
        <div className="max-w-xl mx-auto pt-10 space-y-6">
          <h2 className="text-center font-bold text-[hsl(210,10%,33%)] text-xl lg:text-3xl">
            Keep track of your snippets
          </h2>
          <p className="text-center text-sm lg:text-base text-[hsl(201,11%,66%)]">
            Clipboard instantly stroes any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-20 relative py-20 px-6">
        <div className="relative">
          <div className="lg:-ml-10">
            <img src={computer} className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-20">
          <div className="max-w-sm mr-auto text-center lg:text-left space-y-2">
            <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl">
              Quick Search
            </h3>
            <p className="text-[hsl(201,11%,66%)] text-sm lg:text-base">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="max-w-sm mr-auto text-center lg:text-left space-y-2">
            <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl">
              iCloud Sync
            </h3>
            <p className="text-[hsl(201,11%,66%)] text-sm lg:text-base">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="max-w-sm mr-auto text-center lg:text-left space-y-2">
            <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl">
              Complete History
            </h3>
            <p className="text-[hsl(201,11%,66%)] text-sm lg:text-base">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 lg:gap-20 px-6">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-center font-bold text-[hsl(210,10%,33%)] text-xl lg:text-3xl">
            Access Clipboard anywhere
          </h2>
          <p className="text-center text-[hsl(201,11%,66%)] text-sm lg:text-base">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <img src={devices} />
      </section>
      <section className="pt-20 px-6 space-y-20">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-center font-bold text-[hsl(210,10%,33%)] text-xl lg:text-3xl">
            Supercharge your workflow
          </h2>
          <p className="text-center text-[hsl(201,11%,66%)] text-sm lg:text-base">
            We've got the tools to boost your productivity
          </p>
        </div>
        <div className="grid lg:grid-cols-3 items-center gap-y-10 lg:gap-y-0 mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-8">
            <img src={blacklist} />
            <div className="mr-auto space-y-4">
              <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl text-center">
                Create blacklists
              </h3>
              <p className="text-[hsl(201,11%,66%)] text-center text-sm lg:text-base">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <img src={text} />
            <div className="mr-auto space-y-4">
              <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl text-center">
                Plain text snippets
              </h3>
              <p className="text-[hsl(201,11%,66%)] text-center text-sm lg:text-base">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <img src={preview} />
            <div className="mr-auto space-y-4">
              <h3 className="font-bold text-[hsl(210,10%,33%)] text-xl lg:text-2xl text-center">
                Sneak preview
              </h3>
              <p className="text-[hsl(201,11%,66%)] text-center text-sm lg:text-base">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-40 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0">
        <div>
          <img src={google} className="w-full h-full" />
        </div>
        <div>
          <img src={ibm} className="w-full h-full" />
        </div>
        <div>
          <img src={microsoft} className="w-full h-full" />
        </div>
        <div>
          <img src={hp} className="w-full h-full" />
        </div>
        <div>
          <img src={vectorGraphics} className="w-full h-full" />
        </div>
      </section>
      <section className="py-20 lg:py-40 flex flex-col items-center gap-12 px-6">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-center font-bold text-[hsl(210,10%,33%)] text-2xl lg:text-4xl">
            Clipboard for iOS and Mac OS
          </h2>
          <p className="text-center text-[hsl(201,11%,66%)] text-sm lg:text-base">
            Available for free on the App Store Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="bg-[hsl(171,66%,44%)] shadow-[0px_5px_0px_0px_hsl(168,66%,37%)] text-white px-4 py-3 w-50 rounded-full drop-shadow-2xl cursor-pointer hover:opacity-80">
            <p style={{ fontWeight: 500 }}>Download for IOS</p>
          </button>
          <button className="bg-[hsl(233,100%,69%)] shadow-[0px_5px_0px_0px_hsl(233,64%,58%)] text-white px-4 py-3 w-50 rounded-full drop-shadow-2xl cursor-pointer hover:opacity-80">
            <p style={{ fontWeight: 500 }}>Download for Mac</p>
          </button>
        </div>
      </section>
      <footer className="p-20 bg-[hsl(220,18%,97%)]">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center max-w-6xl mx-auto">
          <div className="w-12">
            <img src={logo} className="w-full h-full" />
          </div>
          <div className="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-20 lg:ml-30 text-black/60">
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-3">
              <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                FAQs
              </a>
              <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                Contact Us
              </a>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-3">
              <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                Press Kit
              </a>
            </div>
            <div className="flex items-center lg:items-start">
              <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                Install Guide
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6">
              <div className="w-6 h-6 text-[#4C545C] hover:text-[hsl(171,66%,44%)] cursor-pointer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <div className="w-6 h-6 text-[#4C545C] hover:text-[hsl(171,66%,44%)] cursor-pointer">
                <svg viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <div className="w-6 h-6 text-[#4C545C] hover:text-[hsl(171,66%,44%)] cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="currentColor"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
