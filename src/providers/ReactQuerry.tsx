'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Children {
    children: ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 1000 * 60 * 5,
        },
    },
});


export const ReactQueryProvider = ({ children }: Children) => (
    <QueryClientProvider client= { queryClient } > { children } </QueryClientProvider>
);