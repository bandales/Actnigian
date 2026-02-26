import { useState } from 'react'
export default function ProductDetails({ onCalculate, onReset }) {
	const [name, setName] = useState('')
	const [quantity, setQuantity] = useState('')
	const [unitPrice, setUnitPrice] = useState('')

	function handleCalculate(e) {
		e.preventDefault()
		const q = Number(quantity)
		const p = Number(unitPrice)
		onCalculate({ name, quantity: q, unitPrice: p })
	}

	function handleReset(e) {
		e && e.preventDefault()
		setName('')
		setQuantity('')
		setUnitPrice('')
		onReset && onReset()
	}

	return (
		<form className="product-form" onSubmit={handleCalculate}>
			<div className="field">
				<label className="field-label">
					Product Name
					<input
						className="field-input"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter product name"
					/>
				</label>
			</div>
			<div className="field">
				<label className="field-label">
					Quantity
					<input
						className="field-input"
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						placeholder="0"
						min="0"
					/>
				</label>
			</div>
			<div className="field">
				<label className="field-label">
					Unit Price
					<input
						className="field-input"
						type="number"
						value={unitPrice}
						onChange={(e) => setUnitPrice(e.target.value)}
						step="any"
						placeholder="0.00"
						min="0"
					/>
				</label>
			</div>

			<div className="form-actions">
				<button className="btn btn-primary" type="submit">
					Calculate
				</button>
				<button className="btn btn-ghost" type="button" onClick={handleReset}>
					Reset
				</button>
			</div>
		</form>
	)
}

