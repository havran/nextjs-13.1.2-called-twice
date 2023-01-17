import getData from "@/lib/fetch/getData";

export default async function Home({ params }: { params: { slug: string[] } }) {
  const data = await getData(params.slug ? params.slug.join('/') : '');

  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
