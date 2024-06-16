import '../../App.css';
import './index.css'
import { PRODUCTS } from '../../constants/product'
import { useEffect, useState } from 'react';

const filterAndReconstructProducts = (products, targetCollection, chunkSize) => {
  const flattenedProducts = products.flat();

  const filteredProducts = flattenedProducts.filter(product => product.collection === targetCollection);

  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += chunkSize) {
    chunkedProducts.push(filteredProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};

const orderProductsByName = (products, chunkSize, isIncrease) => {
  const orderFlag = isIncrease ? 1 : -1
  const flattenedProducts = products.flat();

  const orderedProducts = flattenedProducts.sort((a, b) => orderFlag * (a.name - b.name));

  const chunkedProducts = [];
  for (let i = 0; i < orderedProducts.length; i += chunkSize) {
    chunkedProducts.push(orderedProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
};

const orderProductsByPrice = (products, chunkSize, isIncrease) => {
  const flattenedProducts = products.flat();
  const orderFlag = isIncrease ? 1 : -1

  const orderedProducts = flattenedProducts.sort((a, b) => orderFlag * (a.price - b.price));

  const chunkedProducts = [];
  for (let i = 0; i < orderedProducts.length; i += chunkSize) {
    chunkedProducts.push(orderedProducts.slice(i, i + chunkSize));
  }

  return chunkedProducts;
}

function Product() {
  const currentPath = window.location.pathname.replace('/products/', '')
  const [currentProduct, setCurrentProduct] = useState(currentPath !== 'products' ? filterAndReconstructProducts(PRODUCTS, currentPath, 4) : PRODUCTS)
  const USDollar = new Intl.NumberFormat('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
  const [orderBy, setOrderBy] = useState({
    name: 'date',
    isIncrease: true
  })

  const changeOrder = (type, nextIsIncrease) => {
    if (type === orderBy.name) {
      setOrderBy({
        name: type,
        isIncrease: nextIsIncrease
      })
    } else {
      setOrderBy({
        name: type,
        isIncrease: nextIsIncrease
      })
    }
  }

  const handleSelectChange = (e) => {
    const valueChanged = e.target.value
    switch(valueChanged) {
      case 'AZ':
        changeOrder('name', true)
        break
      case 'ZA':
        changeOrder('name', false)
        break
      case 'increase':
        changeOrder('price', true)
        break
      case 'decrease':
        changeOrder('price', false)
      break
    }
  }

  useEffect(() => {
    if (orderBy.name === 'name') {
      setCurrentProduct(orderProductsByName(currentProduct, 4, orderBy.isIncrease))
    } else if (orderBy.name === 'price') {
      setCurrentProduct(orderProductsByPrice(currentProduct, 4, orderBy.isIncrease))
    }
  }, [orderBy])

  return (
      <div className="body">
        <div className='filter-zone'>
          <label for="orders" style={{marginRight: '0.5rem'}}>Sắp xếp:</label>
          <select id="orders" name="orders" onChange={handleSelectChange}>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
            <option value="increase">Giá tăng dần</option>
            <option value="decrease">Giá giảm dần</option>
          </select>
        </div>
        {currentProduct.map(item => {
          return (
            <div className='card-container'>
              {item.map(it => {
                return (
                  <div className='card' key={it.key}>
                    <div className='card-image'>
                      <img src={it.link}></img>
                    </div>
                    <div className='card-detail'>
                      <div className='card-branch-name'>Mây design</div>
                      <div className='card-product-name'>{it.name}</div>
                      <div className='card-product-price'>{USDollar.format(it.price)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
  );
}

export default Product;