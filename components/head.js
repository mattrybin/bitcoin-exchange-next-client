import Head from 'next/head'

export default (props) => {
  return (
    <Head>
      <title>{props.title ? `${props.title} - Firecoin` : "No Title"}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  )
}
