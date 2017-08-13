export default ({ children }) => (
  <main>
    {children}
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
      html {
        color: #222;
        font-weight: 100;
        font-size: 18px; /* ~16px; */
        font-family: 'proxima-nova-soft';
        line-height: 1.375; /* ~22px */
        -webkit-font-smoothing: antialiased;
        font-kerning: normal;
        text-rendering: optimizeLegibility;
      }

      html {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
      }

      body {
        margin: 0;
      }

      a {
        color: #0074c2;
      }
    `}</style>
  </main>
)
