import { AiOutlinePlus } from "react-icons/ai"

export default function CategoryItems() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-semibold text-black mb-7">
        Fruits and vegetables
      </h2>

      <div className="grid grid-cols-4 gap-8">
        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Avocado <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>

        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Avocado <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>

        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Bunch of carrots 5pcs{" "}
          <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>

        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Chicken 1kg <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>

        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Pre-cooked cord 450g{" "}
          <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>

        <button className="h-fit leading-8 text-left flex gap-x-4 justify-between w-full px-6 py-[1.3rem] rounded-2xl bg-white shadow1 text-black text-2xl font-semibold">
          Mandarin Nadorcott{" "}
          <AiOutlinePlus className="text-[#C1C1C4] text-3xl" />
        </button>
      </div>
    </div>
  )
}