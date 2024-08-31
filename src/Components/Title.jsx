export const Title = ({ text1, text2 }) => {
    return (
        <div className="flex justify-center items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-500 font-[Prata]">{text1}</h1>
            <h1 className="text-2xl sm:text-3xl font-medium text-black font-[Prata]">{text2}</h1>
            <hr className="w-10 h-1 bg-gray-600" />
        </div>
    )
}