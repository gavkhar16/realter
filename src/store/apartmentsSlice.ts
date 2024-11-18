const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b3f4229913msh1a673e0076f1bf5p1edb96jsndf258c684c9a',
		'x-rapidapi-host': 'bayut.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}