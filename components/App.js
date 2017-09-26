import Header from './Header'
import Head from './head'
import Footer from './footer'

export default ({ children, pageData }) => (
  <main>
    <Head title='No Title' />
    {pageData.header === true ? <Header /> : null}
    {children}
    {pageData.footer === true ? <Footer /> : null}
    <style jsx global>{`
      @font-face {
        font-family: 'proxima-nova-soft';
        src: url('./static/font/proxima-nova-soft-bold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova-soft';
        src: url('./static/font/proxima-nova-soft-semibold.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova-soft';
        src: url('./static/font/proxima-nova-soft-medium.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
      }

      @font-face {
        font-family: 'proxima-nova-soft';
        src: url('./static/font/proxima-nova-soft-regular.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
      }
      
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
      	margin: 0;
      	padding: 0;
      	border: 0;
      	font-size: 100%;
      	font: inherit;
      	vertical-align: baseline;
      }

      html {
        color: #222;
        font-weight: 400;
        font-size: 18px;
        font-family: 'proxima-nova-soft';
        line-height: 1.375; /* ~22px */
        -webkit-font-smoothing: antialiased;
        font-kerning: normal;
        text-rendering: optimizeLegibility;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
      }

      input {
        font-family: 'proxima-nova-soft';
      }

      body {
        margin: 0;
      }
    `}</style>
  </main>
)
