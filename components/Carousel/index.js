import {useLayoutEffect, useRef, useState} from "react";
import styles from "./Carousel.module.css";

const Carousel = ({items = [], page = 0, setPage, perPage = 3}) => {
  const [width, setWidth] = useState(0);
  const wrapper = useRef();
  const getWidth = () => {
    if(wrapper.current){
      console.log(wrapper.current.getBoundingClientRect());
      setWidth(wrapper.current.getBoundingClientRect().width);
    }
  }
  
  useLayoutEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    }
  }, []);
  
  const pages = new Array(Math.ceil(items.length / perPage))
  .fill()
  .map(_ => items.splice(0, perPage))
  
  return(
    <div ref={wrapper} style={{width: "100%"}} className={styles.wrapper}>
      <div style={{
        transform: `translateX(-${page * width}px)`
      }} className={styles.carousel}>
        {pages.map((page, i) => (
          <div key={i} style={{
            width,
            gridTemplateColumns: (new Array(3).fill().map(() => "1fr").join(" "))
          }} className={styles.page}>
            {page.map((item, j) => (
              <div key={`page-${i}-item-${j}`}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel;