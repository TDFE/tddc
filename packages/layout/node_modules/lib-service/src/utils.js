export const removeEmptyKey = (params = {}) => {
	for (const key in params) {
		if (typeof params[key] === "undefined") {
			delete params[key];
		}
	}
	return params;
};

export const getFullUrl = (url, baseUrl = "") => {
	const { protocol, host } = window.location;

	if (/^http/i.test(baseUrl)) {
		return `${baseUrl}${url}`;
	}

	if (!/^http/i.test(url)) {
		url = `${protocol}//${host}${baseUrl}${url}`;
	}

	return url;
};

export const buildURL = (config, params = {}, baseUrl = "") => {
	let { url, method } = config;
	const pathParamsKeys = [];

	method = (method || "GET").toUpperCase();

	url = getFullUrl(url, config?.baseUrl || baseUrl);
	// 替换url中动态参数如: /users/{id} => /users/1
	url = url.replace(/{([^}]*)}/g, (str, key) => {
		pathParamsKeys.push(key);

		if (typeof params[key] === "object") {
			return JSON.stringify(params[key]);
		}

		return params[key];
	});
	// 替换url中动态参数如: /users/:id => /users/1
	url = url.replace(/\/:([^/?]*)/g, (str, key) => {
		pathParamsKeys.push(key);
		return `/${params[key]}`;
	});

	if (method === "GET") {
		url = new URL(url);
		const searchParams = new URLSearchParams(
			removeEmptyKey(
				// 过滤掉path中动态参数
				Object.entries(params).reduce(
					(acc, [key, value]) => {
						if (!pathParamsKeys.includes(key)) {
							acc[key] = value;
						}
						return acc;
					},
					{}
				)
			)
		).toString();
		url.search += (url.search && searchParams ? '&' : '') + searchParams;

		return url.href;
	}

	return url;
};
