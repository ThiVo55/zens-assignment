export async function fetchData() {
	return await fetch('http://localhost:8080/get-jokes', {
		method: 'GET',
	}).then((response) => response.json())
}
