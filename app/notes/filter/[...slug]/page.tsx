import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type NotesByCategoryProps = {
    params: Promise<{ slug: string[] }>;
};

async function NotesByCategory({ params }: NotesByCategoryProps) {
    const { slug } = await params;
    const category = slug[0] === 'all' ? undefined : slug[0];
    const response = await fetchNotes(1, '', category);
    return (
        <div>
            <h1>NotesByCategory</h1>
            {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
        </div>
    );
}

export default NotesByCategory;
