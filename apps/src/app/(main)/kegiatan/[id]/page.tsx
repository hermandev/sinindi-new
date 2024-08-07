import PageContainer from "./components/container";

async function Page({ params }: { params: { id: string } }) {
  return <PageContainer id={params.id} />;
}

export default Page;
