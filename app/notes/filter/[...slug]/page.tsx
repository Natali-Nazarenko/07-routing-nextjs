import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type NotesByTagProps = {
    params: Promise<{ slug: string[] }>;
};

async function NotesByTag({ params }: NotesByTagProps) {
    const { slug } = await params;
    const tag = slug[0] === 'all' ? undefined : slug[0];
    const response = await fetchNotes(1, '', tag);
    return (
        <div>
            <h1>Notes by tag</h1>
            {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
        </div>
    );
}

export default NotesByTag;
