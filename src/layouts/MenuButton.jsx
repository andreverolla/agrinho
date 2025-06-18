export default function MenuButton({ isOpen, setIsOpen }) {

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex w-7 h-7 p-[3px] cursor-pointer flex-col justify-around items-center focus:outline-none"
      aria-label="Menu"
      aria-expanded={isOpen}
      aria-controls="main-menu"
    >
      <span
        className={`h-[0.125rem] w-full rounded-[0.125rem] bg-white transition-all duration-400
          ${isOpen ? 'translate-y-[7.5px] rotate-[-45deg]' : ''}`}
      />
      <span
        className={`h-[0.125rem] w-full rounded-[0.125rem] bg-white transition-all duration-400
          ${isOpen ? 'w-0 opacity-0' : ''}`}
      />
      <span
        className={`h-[0.125rem] w-full rounded-[0.125rem] bg-white transition-all duration-400
          ${isOpen ? '-translate-y-[7.5px] rotate-[45deg]' : ''}`}
      />
    </button>
  );
}