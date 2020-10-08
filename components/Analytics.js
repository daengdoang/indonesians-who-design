export default function Analytics() {
  return (
    <>
      <script
        async
        src="#"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "UA-XXXXXXXX-X");
          `,
        }}
      />
    </>
  );
}
