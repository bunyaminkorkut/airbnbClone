export const Columns = ({ range }) => {
  const COLS = [0, 0, 1, 0, 2, 1, 0, 2, 4, 4, 6, 4, 2, 6, 6, 8, 6, 8, 8, 12, 8, 12, 6, 4, 2, 6, 6, 8, 6, 8, 8, 12, 12, 6, 4, 2, 6, 6, 8, 6, 8, 8, 12, 8, 12, 8, 16, 12, 16, 16, 12, 12, 8, 6, 12, 4, 8, 6, 4, 2, 2, 4, 1, 0]

  let min=Math.floor(COLS.length/100*(range[0]/100))
  let max=Math.floor(COLS.length/100*(range[1]/100))
  return (
    <div className="flex w-full justify-items-stretch justify-between items-end absolute gap-[0.5px]">
      {
        COLS.map((col, i) =>
          <div className={`h-${col} rounded-t-sm w-full ${i>min&& i<max ?'bg-[#b0b0b0]':'bg-[#dddddd]' }`}>
          </div>
        )
      }


      {/* <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-6 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-6 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-6 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-6 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-6 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-8 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-2 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-4 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-12 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div>
            <div className="h-16 w-full text-[#d0d0d0] bg-[#d0d0d0]">
            </div> */}
    </div>
  )
}