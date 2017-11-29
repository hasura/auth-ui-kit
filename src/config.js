const authUrl = "https://auth." + process.env.REACT_APP_CLUSTER_NAME + ".hasura-app.io/v1";

const endpoints = {
	'signup': '/signup',
	'login': '/login'
};

export {
	endpoints,
	authUrl
}