import { useState, useEffect } from 'react' 
import ProductDetails from './ProductDetails'
import BillingDetails from './BillingDetails'

export default function PriceChecker() {
	const [billingData, setBillingData] = useState(null)

	useEffect(() => {
		document.title = 'Price Checker'
	}, [])

	function handleCalculate(data) {
		setBillingData(data)
	}

	function handleReset() {
		setBillingData(null)
	}

	return (
		<div>
			<h2 className="page-title">Price Checker</h2>
			<ProductDetails onCalculate={handleCalculate} onReset={handleReset} />
			{billingData && <BillingDetails data={billingData} />}
		</div>
	)
}

