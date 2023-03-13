import React, {useEffect} from 'react'
import Navbar from '../Components/Nav bar/Navbar'
import ProductView from '../Components/ProductView/ProductView'
function ProductViewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <ProductView></ProductView>
    </div>
  )
}

export default ProductViewPage
