import getData from "@/lib/fetch/getData";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { slug: string[] }
}) {
  const data = await getData(params.slug ? params.slug.join('/') : '');

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
