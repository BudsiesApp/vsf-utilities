import roundTo from './roundTo';

/**
 * Create price object with base price and tax
 * @param price - product price which is used to extract tax value
 * @param rateFactor - tax % in decimal
 * @param isPriceInclTax - determines if price already include tax
 */
function createSinglePrice(
  price: number | null,
  rateFactor: number,
  isPriceInclTax: boolean,
) {
  const _price =
    isPriceInclTax && price !== null ? price / (1 + rateFactor) : price;
  const tax = _price !== null ? _price * rateFactor : 0;

  return {
    price: _price !== null ? roundTo(_price, 2) : null,
    tax: roundTo(tax, 2),
  };
}

export default createSinglePrice;
