'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export function withAuth<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    options: { isPublic?: boolean } = {}
) {
    return function WithAuthComponent(props: P) {
        const router = useRouter();
        const { isAuthenticated } = useSelector((state: RootState) => state.auth);

        useEffect(() => {
            if (!options.isPublic && !isAuthenticated) {
                router.push('/sign-in');
            }

            if (options.isPublic && isAuthenticated) {
                router.push('/');
            }
        }, [isAuthenticated, router, options.isPublic]);

        if (!options.isPublic && !isAuthenticated) return null;
        if (options.isPublic && isAuthenticated) return null;

        return <WrappedComponent {...props} />;
    };
}