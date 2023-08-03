"use client";
import { HttpLink } from "@apollo/client";
import {
    NextSSRApolloClient,
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
    const httpLink = new HttpLink({
        uri:process.env.NEXT_APP_END_POINT,
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloWrapper({ children }) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}