
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  }
  return (
    <div className='w-full my-2'>
      <h2 className="text-white my-3 text-lg font-medium mx-2">Continue to Watch</h2>
      <div className="relative">
        <div onClick={() => handleClick("left")} className={`absolute w-[50px] opacity-60 h-full text-5xl bg-gray-950 text-white z-10 top-0 bottom-0 left-0 py-10 ${!isMoved ? "hidden" : "flex"}`}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div className="flex ml-[50px] transition duration-500 ease-in" style={{ width: "max-content" }} ref={listRef}>
          <ListItem index={0}/>
          <ListItem  index={1}/>
          <ListItem  index={2}/>
          <ListItem  index={3}/>
          <ListItem  index={4}/>
          <ListItem  index={5}/>
          <ListItem  index={6}/>
          <ListItem  index={7}/>
          <ListItem  index={8}/>
          <ListItem  index={9}/>
        </div>
        <div onClick={() => handleClick("right")} className='absolute w-[50px] h-full text-5xl text-white bg-gray-400 z-10 top-0 bottom-0 py-10 right-0' >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </div>



  );
};

export default List;