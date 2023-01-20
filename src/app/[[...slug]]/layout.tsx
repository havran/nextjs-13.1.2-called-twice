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
      <head />
      <body>{children}</body>
    </html>
  )
}
