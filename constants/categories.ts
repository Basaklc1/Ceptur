import { appConfig } from "../src/screens/config";

export interface Category {
	name: string;
	img_url: string;
	key: string;
}

export const categories = [
	{
		name: 'MUSEUMS',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0kgvBSxzYU4ynlOGpwNW7ncs4tY-RWOJ3LZ2VB39BM518U_4kzvZshq-q1vqG8sqofapx2Q2_Gn7OIuLingyPrP7hItNer_CPVVHgE5s6Jy1pcqd3-pIVwC3xpoBy0ecsqWZ5umtoWdUqGKsqwzwTrzBIboLXbdiTUMayAQg1Vv8lYr&key=${appConfig.googleApiKey}`,
		key: 'museums'
	},
	{
		name: 'HISTORICAL',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0kS4o0Yzaj3mp4uFRnY5orCaIb9RQgZTvH8Bu16gQimfx-rTlUit59Nr20mFTBHz9WuJsQrKRm_fFUJ6HXDO61WG0BVXBXhjo61B9IaWjpHBNVoaL2B_ZrDHc0QYmw5s-EEwZnuI6YH2F9kx0uAsUqiQ41-kUjozClMkigJMqpeIh-g&key=${appConfig.googleApiKey}`,
		key: 'historicalplaces'
	},
	{
		name: 'MOSQUES',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0m1jddv_iuVv8_cyWl-z9Tx91QIZH-rMy4lH7Brq1qpewCxrKG_RN3PY8-rwksgDMrdTGY0RnFWv4k7RKCbQIYJi1PLDf_szij3LZ0HMdvUi7PmRd8R5rMAAGKBGSE3DhPYTLLASqMYuKZS7YCGtwqX6BS3tnJe-QPYm7i1vl5POi3o&key=${appConfig.googleApiKey}`,
		key: 'mosques'
	},
	{
		name: 'PARKS',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0n3C2-1HkszoUdUGrlccbomDFKftKRsp6wh3-7voO5fqSsxYUYlUP7P8ssnQ30lmBK5G1ciIDfW82MkNA_lF-Il1_RrQMSLptoU52jhZ3JmPgMam1kBMCLdvF521BBeO6fQsRPl-SldEIP59nwOnFDO6exY3wL0s0LJmVOiZRqTMXfY&key=${appConfig.googleApiKey}`,
		key: 'parks'
	},
	{
		name: 'RESTAURANTS',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0nocKo-w0ZPTp7nHk89mIgLgnadjfbTtQZETBHSgsgDCzkIUaMsfV6Jzudju3nERXB-M9pbxRGIPPjn9iH0jI2tCT1EDEVrq3ZH4U2iCYnhEIm0rHwZV9wPRfETm-HOE1dZtPNIvRuJpmrBh6yganO-BHtQT27KVczYhk09aQ1NsRAv&key=${appConfig.googleApiKey}`,
		key: 'restaurants'
	},
	{
		name: 'SHOPPING MALL',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0mXbTn3_1E4mbEtjgR8ZJcwnwMoog4q_X5NtnTWNjcX_dncgWzLCoBMI3L3tcmE_-VTAzNE4zCrgpHBlgCM3IIjjhL1ILPmV4PFSFINQNdkIT6NeNjh5PH1tYQQfp2Yv5iY2o1qBsmx6MX8vMBh6liE9LJsCUEIdPK5h1z08_1RyZAu&key=${appConfig.googleApiKey}`,
		key: 'shoppingmall'
	},
	{
		name: 'BAZAAR',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0ku_syQheNQsx7t_XLvpC26Aqjs_9tYhtX77vrPCmDPgZsADDtUDr4cnT6s4UJL2uNoknvd0gBmYvkB_Gn8dXbBic7401Z2tfBVzNWkbyht3829IDfvP_uVj-Zh7NxwTlI_jovQ7pmA5L-iZYh0tOs3d3vV8ssndFQDpSG2NXcA0qnF&key=${appConfig.googleApiKey}`,
		key: 'bazaar'
	},
	{
		name: 'COAST',
		img_url: `${appConfig.googlePlacePhotoBaseUrl}&photo_reference=AZose0mw1M5UgsR4H_x468lZjfStUk041nETr8j7r5sdVEpVQy38Y0ooLOA-jmXDW1mFrgUA69gw0iglM5TmcRMmXuzF-Q0AuKfvJCzXLwV3khOeI1U2p-Sfe4U6WdSvOrF3hW5obqoqkKPDICRltFcsLakTpcINvN5hugQIE5aXuc1Fv6_j&key=${appConfig.googleApiKey}`,
		key: 'coast'
	},
];