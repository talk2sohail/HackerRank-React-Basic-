import React, { useState } from "react";

function Slides({ slides }) {
	const [step, setStep] = useState(0);
	const l = slides.length;
	const next = () => {
		if (step <= l - 2) setStep(step + 1);
	};

	const prev = () => {
		if (step >= 1) setStep(step - 1);
	};

	const restart = () => {
		setStep(0);
	};
	return (
		<div>
			<div id="navigation" className="text-center">
				<button
					data-testid="button-restart"
					className="small outlined"
					disabled={step === 0 ? true : false}
					onClick={restart}
				>
					Restart
				</button>
				<button
					data-testid="button-prev"
					className="small"
					onClick={prev}
					disabled={step === 0 ? true : false}
				>
					Prev
				</button>
				<button
					data-testid="button-next"
					className="small"
					onClick={next}
					disabled={step === l - 1 ? true : false}
				>
					Next
				</button>
			</div>
			<div id="slide" className="card text-center">
				<h1 data-testid="title">{slides[step].title}</h1>
				<p data-testid="text">{slides[step].text}</p>
			</div>
		</div>
	);
}

export default Slides;
