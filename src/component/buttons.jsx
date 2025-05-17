function ClickableButtons(props) {
  let classone = `w-[266px] h-[42px] px-3 py-[10px] 
  bg-white rounded-[2px]
  cursor-pointer text-joshua font-medium font-montserrat hover:bg-darkwhite
  text-[16px]  `;
  let classtwo = `w-[266px] h-[42px] px-3 py-[10px] 
  border-solid bg-joshua border-[1px] rounded-[2px]
  cursor-pointer text-white font-medium font-montserrat hover:text-joshua hover:bg-white
  text-[16px] border-white `;
  return (
    <button
      className={props.default ? classone : classtwo}
      onClick={() => (window.location.href = `/${props.link}`)}
    >
      {props.title}
    </button>
  );
}

export default ClickableButtons;
