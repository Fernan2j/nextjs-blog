import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from "../public/styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';
import Link from "next/link";
import Date from "../components/date";
import Button from '../components/button';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am trying to build something using Next.js</p>
        <p>
          (This is a sample website - built using this{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>)
        </p>
      </section>
      <Button/>
      <section className={`${utilStyles.lightText} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}