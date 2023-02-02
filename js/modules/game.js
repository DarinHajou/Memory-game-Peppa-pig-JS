export default function () {

	// Grabbing a couple of elements
	const section = document.querySelector('section');
	const playerLivesCount = document.querySelector('span');
	const playerLives = 6;

		// Link text to content value
		playerLivesCount.textContent = playerLives;

		// Generate data for the cards
		const getData = () => [
			{imgSrc: '../assets/images/peppa.jpg', name: "cat"},
			{imgSrc: '../assets/images/cat.jpg', name: "cat"},
			{imgSrc: '../assets/images/dog.jpg', name: "cat"},
			{imgSrc: '../assets/images/pappapig.jpg', name: "cat"},
			{imgSrc: '../assets/images/pedro.jpg', name: "cat"},
			{imgSrc: '../assets/images/mama.jpg', name: "cat"},
			{imgSrc: '../assets/images/george.jpg', name: "cat"},
			{imgSrc: '../assets/images/zebra.jpg', name: "cat"},
			{imgSrc: '../assets/images/peppa.jpg', name: "cat"},
			{imgSrc: '../assets/images/cat.jpg', name: "cat"},
			{imgSrc: '../assets/images/dog.jpg', name: "cat"},
			{imgSrc: '../assets/images/pappapig.jpg', name: "cat"},
			{imgSrc: '../assets/images/pedro.jpg', name: "cat"},
			{imgSrc: '../assets/images/mama.jpg', name: "cat"},
			{imgSrc: '../assets/images/george.jpg', name: "cat"},
			{imgSrc: '../assets/images/zebra.jpg', name: "cat"},
			
		];

		// Running the index randomized 
		const shuffleCards = () => {
			const cardData = getData();
			cardData.sort(() => Math.random() - 0.5);
			console.log(cardData);
		};

		shuffleCards();
}

