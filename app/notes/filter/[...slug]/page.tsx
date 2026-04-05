import { fetchNotes } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import NotesClient from './Notes.client';

type NotesByTagProps = {
    params: { slug: string[] };
};

async function NotesByTag({ params }: NotesByTagProps) {
    // const { slug } = params;
    const firstSlug = params.slug?.[0];

    const tag = firstSlug && firstSlug !== 'all' ? firstSlug : undefined;
    const page = 1;
    const search = '';

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', page, search, tag],
        queryFn: () => fetchNotes(page, search, tag),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tag} />
        </HydrationBoundary>
    );
}

export default NotesByTag;
