import useSWR from 'swr';

const usePost = (url, body) => {
    const { data, error } = useSWR(url, async (url) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    });

    return { data, error };
};

export default usePost;
