export default async function Page() {
  const res = await fetch("http://192.168.1.167:80", {
    cache: "no-store",
  });

  const html = await res.text();

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
