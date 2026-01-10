export default async function Page() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return (
        <div className="text-center pt-12">
        <h1 className="text-4xl capitalize font-bold mb-4">
            Posts
        </h1>
        {/* <ul>
            {data.posts.map((post: { id: number; title: string }) => (
                <li key={post.id} className="mb-2">
                    <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                    {post.title}</a>
                </li>
            ))}
        </ul> */}

        <form className="max-w-[400px] mx-auto mt-8">
            <input
                type="text"
                placeholder="Title"
                className="border p-2 mb-2 w-full"
            />
            <textarea 
            placeholder="Content"
            className="border p-2 mb-2 w-full"></textarea>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full"
            >
                Create Post
            </button>
        </form>
        <p className="text-[16px]">
            This is the posts page of my awesome website built with Next.js!
        </p>
        </div>
    );
}
