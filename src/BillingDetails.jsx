import { useEffect } from 'react'   
export default function BillingDetails({ data }) {
	useEffect(() => {}, [])

	if (!data) return null

	const { name, quantity, unitPrice } = data
	const total = Number(quantity) * Number(unitPrice)

	return (
		<section className="card billing-details" aria-label="billing">
			<h3>Billing Details</h3>
			<p>
				<strong>Product:</strong> {name || '-'}
			</p>
			<p>
				<strong>Quantity:</strong> {quantity}
			</p>
			<p>
				<strong>Unit Price:</strong> {unitPrice}
			</p>
			<p>
				<strong>Total:</strong> {isNaN(total) ? '-' : total}
			</p>
		</section>
	)
}

