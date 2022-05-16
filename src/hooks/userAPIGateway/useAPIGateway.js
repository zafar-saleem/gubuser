import { useEffect, useState } from 'react';
import axios from 'axios';

const generateURL = ({ method, endPoint, baseUrl }, ...rest) => {
	let requestUrl = '';
	if (baseUrl) {
		requestUrl = baseUrl;
	} else {
		requestUrl = process.env.REACT_APP_URL;
	}
	
	let params = '', index = 1, url = [];

	const paramsCriteria = {
		1: (key, value) => `?${value}`,
		2: (key, value) => `&${key}=${value}`,
	};

	for (const [key, value] of Object.entries(rest[0])) {
		params = `${params}${paramsCriteria[index](key, value)}`;
	  index = 2;
	}

	if (endPoint) {
		for (let link of endPoint) {
			url.push((method === 'GET') &&
				`${requestUrl}${link}${params}` ||
				`${requestUrl}${link}`);
		}
	}

	return url;
}

const useAPIGateway = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const [loader, setLoader] = useState(false);
	const [httpProps, setHttpProps] = useState({});

	useEffect(() => {
		const cancelTokenSource = axios.CancelToken.source();

		async function load() {
			setLoader(true);
			let promises = [];

			const urls = generateURL({
				method: httpProps?.method,
				endPoint: httpProps?.endPoint,
				baseUrl: httpProps?.baseUrl,
			}, { ...httpProps?.params });

			if (urls.length > 0) {
				for (const url of urls) {
					promises.push(axios({
					  method: httpProps?.method,
					  url: url,
					  cancelToken: cancelTokenSource.token,
					  headers: {
							'Content-Type': 'application/json',
							...(httpProps?.authorization && { 'Authorization': `Bearer ${httpProps?.authorization}` }),
				    },
					  ...(httpProps?.method !== 'GET' && { data: { ...httpProps?.params } }),
					}));
				}
			}

			try {
				const response = await axios.all(promises);
			
				if (response.length === 1) {
					setData(response[0].data);
				} else {
					if (data.length > 0) {
						setData(data => [{data: [...data[0]?.data, ...response[0]?.data]}, data[1]]);
					} else {
						setData(response);
					}
				}
			} catch(error) {
				setError({
					status: error.response.status,
					text: error.response.statusText,
				});
			}

			setLoader(false);
		}

		load();

		return () => cancelTokenSource.cancel();
	}, [httpProps]);

	return {
		data,
		setData,
		loader,
		error,
		setError,
		setHttpProps,
	}
};

export default useAPIGateway;
