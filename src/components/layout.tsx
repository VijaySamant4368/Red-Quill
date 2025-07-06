import Head from "next/head";

type HeadProp = {
  title: string;
};

export function Layout({title}:HeadProp){
    return (
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
            </Head>
    )
}