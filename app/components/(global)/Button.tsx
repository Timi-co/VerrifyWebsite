type textProp = {
    text:string
}

export default function Button({text}:textProp) {
  return (
    <button className="circle-btn py-[10px] px-[30px] text-white w-fit text-[14px] ">{text}</button>
  )
}