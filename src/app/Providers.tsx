'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ReactQueryProvider } from '@/providers/ReactQuerry';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ReactQueryProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </ReactQueryProvider>
        </Provider>
    );
}