import React from "react";
import SingleItems from "./SingleItems"
import { Link,useLocation } from "react-router-dom";

const ItemsList = ({title,items,itemsArray,path,idPath}) => {

  const {pathname} = useLocation()
  console.log(pathname)
  const isHome = pathname === "/"

  let finalItems = isHome ? items : Infinity

  return (
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title} populares</h2>
          
          {isHome ? 
            (<Link className="item-list__link" to={path}>
              Mostrar tudo
            </Link>
            ) : (
              <></>
            )}
          
        </div>

        <div className="item-list__container">
          {itemsArray.filter((currentValue,index) => index < finalItems)
          .map((currObj,index) => (
            <SingleItems idPath={idPath} {...currObj} key={`${title}-${index}`}/>
          ))}
        </div>
      </div>
  );
};

export default ItemsList