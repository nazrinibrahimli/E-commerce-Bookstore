


export function currencyFormat(number) {
  const currency=new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"});


  return currency.format(number)
  
}


