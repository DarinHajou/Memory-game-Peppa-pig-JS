export default function () {

	// Grabbing a couple of elements from the DOM
	const section = document.querySelector('section');
	const playerLivesCount = document.querySelector('span');
	const playerLives = 6;

		// Link text to content value
		playerLivesCount.textContent = playerLives;

		// Generate data for the cards
		const getData = () => [
			{imgSrc: '../assets/images/peppa.jpg', name: "peppa"},
			{imgSrc: '../assets/images/cat.jpg', name: "cat"},
			{imgSrc: '../assets/images/dog.jpg', name: "dog"},
			{imgSrc: '../assets/images/pappapig.jpg', name: "pappapig"},
			{imgSrc: '../assets/images/pedro.jpg', name: "pedro"},
			{imgSrc: '../assets/images/mama.jpg', name: "mama"},
			{imgSrc: '../assets/images/george.jpg', name: "george"},
			{imgSrc: '../assets/images/zebra.jpg', name: "zebra"},
			{imgSrc: '../assets/images/peppa.jpg', name: "peppa"},
			{imgSrc: '../assets/images/cat.jpg', name: "cat"},
			{imgSrc: '../assets/images/dog.jpg', name: "dog"},
			{imgSrc: '../assets/images/pappapig.jpg', name: "pappapig"},
			{imgSrc: '../assets/images/pedro.jpg', name: "pedro"},
			{imgSrc: '../assets/images/mama.jpg', name: "mama"},
			{imgSrc: '../assets/images/george.jpg', name: "george"},
			{imgSrc: '../assets/images/zebra.jpg', name: "zebra"},
		];

		// Running randomizing the index 
		const shuffleCards = () => {
			const cardData = getData();
			cardData.sort(() => Math.random() - 0.5);
			return cardData;
		};

		// Card generator function
		const cardGenerator = () => {
			const cardData = shuffleCards();
			// Generate the HTML
			cardData.forEach(item => {
				console.log(item);
				const card = document.createElement('div');
				const face = document.createElement('img');
				const back = document.createElement('div');
				card.classList = 'card';
				face.classList = 'face';
				back.classList = 'back';
				// Attach image to the cards
				face.src = item.imgSrc;
				// Attach the cards to the section 
				section.appendChild(card);
				card.appendChild(face);
				card.appendChild(back);
			});
		};

		cardGenerator();

};

