import Image from "next/image";
import logo from "@/img/logo.png";
import {FaPlus} from "react-icons/fa6"

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#0D0D0D] h-[200px] flex items-center justify-center">
        <Image src={logo} alt="" height={48} width={126} />
      </div>
      <div className="h-auto w-full flex justify-center gap-2">
        <input
          className="-mt-5 w-96 h-10 px-2 bg-slate-600 text-white rounded-md"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className="bg-[#1E6F9F] -mt-5 flex items-center rounded-md px-2 gap-2 text-sm text-white">
          <FaPlus />
           Criar </button>
      </div>
    </main>
  );
}
