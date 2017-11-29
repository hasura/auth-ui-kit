const clusterName = "h34-barn99-stg.hasura-app.io";
const authVersion = "v1";
const authUrl = "https://auth." + clusterName + "/" + authVersion;
const endpoints = {
	'signup': '/signup',
	'login': '/login'
};

export {
	endpoints,
	authUrl
}