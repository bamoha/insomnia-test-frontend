'use-client';
import { PageLayout, PriceIndexPage, Providers } from '@/components';
import NftListPageSetup from '@/components/NftListPageSetup';

export default function NFTListing() {
    return (
        <Providers>
            <PageLayout>
                <NftListPageSetup />
            </PageLayout>
        </Providers>
    );
}
