import React from "react";

interface Props {
  params: { slug: string[] }; //dynamic params with the [...slug] catch all route
  searchParams: { sortOrder: string }; // ?sortOrder= query param value
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
