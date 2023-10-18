const MERCHANT_AUTH_URL = "https://reqres.in/api/users"

const fetchData = async () => {

    const requestBody = {
        "public_key": process.env.PUBLIC_KEY,
        "secret_key": process.env.SECRET_KEY,
    };

    try {
        const response = await fetch(MERCHANT_AUTH_URL, {
            method: 'POST',
            body: JSON.stringify( {"name": "Fernando", "job": "manufacturer"} ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json();
        console.log('API Response:', data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export default function Button() {
    return (
        <button onClick={fetchData}>BRITE AUTHORIZE</button>
    );
};