export default function AppBar() {
  return (
    <div className="absolute sm:fixed top-0 left-0 right-0 z-40 flex justify-between sm:px-9 sm:py-4 py-2">
      <div className="flex flex-col justify-center">
        <img
          src="/sak-logo.png"
          alt="sAk Logo"
          className="sm:w-18 w-15 sm:h-18 h-15 sm:hidden"
        />
        <img
          src="/sak-logo-white.png"
          alt="sAk Logo"
          className="sm:w-18 w-15 sm:h-18 h-15 hidden sm:block"
        />
      </div>
      <div className="flex flex-col justify-center hover:scale-110 transition-all">
        <div
          className="flex justify-center items-center h-17 sm:w-17 w-15 text-white cursor-pointer"
          onClick={() => {
            window.open("https://wa.me/+919366269257", "_blank");
          }}
        >
          <img
            src={"/whatsApp.png"}
            alt="WhatsApp"
            className="w-8 h-8 sm:hidden"
          />
          <img
            src={"/whatsAppPC.png"}
            alt="WhatsApp"
            className="hidden sm:block w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}
