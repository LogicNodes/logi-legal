import { createFileRoute } from "@tanstack/react-router";

import { PageView } from "../../components/PageView";
import { SITE_TITLE } from "../../components/SiteLayout";
import { getPage } from "../../lib/pages";

export const Route = createFileRoute("/$lang/")({
  loader: ({ params }) => getPage({ data: { locale: params.lang, slug: "index" } }),
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.title} - ${SITE_TITLE}` : SITE_TITLE }],
  }),
  component: () => <PageView page={Route.useLoaderData()} />,
});
