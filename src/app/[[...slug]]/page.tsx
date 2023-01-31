import getData from "../../lib/fetch/getData";
import Link from "next/link";

// export async function generateStaticParams() {
//   return [
//     { slug: ['']},
//     { slug: ['page1']},
//     { slug: ['page2']},
//     { slug: ['page3']},
//   ];
// }

// Solve problem but disable static pages.
// export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: { slug: string[] } }) {
  const data = await getData(params.slug ? params.slug.join('/') : '');

  return (
    <div>
      <h1>Test</h1>
      <ul>
        <li><Link href="/">Page</Link></li>
        <li><Link href="/page1">Page 1</Link></li>
        <li><Link href="/page2">Page 2</Link></li>
        <li><Link href="/page3">Page 3</Link></li>
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
