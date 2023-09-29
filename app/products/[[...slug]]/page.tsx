import React from 'react'

interface Props {
    params: { slug: string[] } //dynamic params with the [...slug] catch all route
}

const ProductPage = ({params: {slug}}: Props) => {
  return (
    <div>ProductPage {slug}</div>
  )
}

export default ProductPage