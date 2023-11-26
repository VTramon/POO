import { Check } from 'lucide-react'

const sentModal = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center overflow-hidden z-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center relative w-3/6 h-2/6 bg-slate-100 rounded-3xl overflow-hidden"
      >
        <h2 className="text-5xl font-bold">Seu pedido foi</h2>
        <br />
        <h2 className="text-5xl font-bold text-orange-500">confirmado!</h2>

        <div className="bg-green-400 rounded-full p-4 mt-4">
          <Check color="white" strokeWidth={3} size={80} />
        </div>
      </div>
    </div>
  )
}

export default sentModal
