import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Nav bar/Navbar'
import ProductCard from '../Components/ProductCard/ProductCard'
import './Pages.css'

import Data from '../Data/Data'
function ViewMore() {
  const {category} = useParams()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='ViewMoreParentDiv'>
      <Navbar></Navbar>
      <div className="viewMoreContainer">

      <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div className="viewMoreProductsWrapper">
        {Data.filter(item=>item.category == category).map((element, index)=>{

         return  <ProductCard product={element} listview key={index}></ProductCard>
        })
        }
      </div>
      </div>
    </div>
  )
}

export default ViewMore
