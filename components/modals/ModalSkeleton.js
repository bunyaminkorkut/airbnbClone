
const ModalSkeleton = ({ show, outsideClick, children, bgClass, modalStyle, slider }) => {
  let classAdd = show
    ? "modal-transition-show opacity-100 "
    : "modal-transition-hide opacity-0 hidden"

  return (
    <div
      onClick={outsideClick}
      className={"fixed inset-0 bg-gray-700/50 z-50 " + classAdd}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={modalStyle}
        className={
          "absolute max-h-[85vh] overflow-y-auto sm:w-136 max-w-full rounded-2xl py-3 sm:py-6 m-auto top-32 inset-x-2 " +
          (bgClass ? bgClass : " bg-hudson ")+ (slider ? ' slider ':'')
        }
      >
        {children}
      </div>
    </div>
  )
}

export default ModalSkeleton
