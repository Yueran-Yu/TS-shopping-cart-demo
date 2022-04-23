import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import App from './App';
import ContextProvider from "./Context/ContextProvider";

const client = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ContextProvider>
				<App/>
			</ContextProvider>
		</QueryClientProvider>
	</React.StrictMode>, document.getElementById('root') as HTMLElement);

