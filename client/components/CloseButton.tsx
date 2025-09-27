import Image from 'next/image'

type CloseButtonProps = {
  handleClose: () => void
}

const CloseButton = ({ handleClose }: CloseButtonProps) => {
  return (
    <div className="h-[85px] flex justify-end p-400 ">
      <button
        className="w-[24px] flex justify-center items-center cursor-pointer"
        onClick={handleClose}
      >
        <Image
          src="/assets/shared/icon-close.svg"
          width={19.09}
          height={19.09}
          alt="close-button"
        />
      </button>
    </div>
  )
}
export default CloseButton
