'use-client';
import { PageLayout, PriceIndexPage, Providers } from '@/components';

export default function Home() {
    return (
        <Providers>
            <PageLayout>
                <PriceIndexPage />
            </PageLayout>
        </Providers>
    );
}
