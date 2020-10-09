export default function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/ns.html?id=GTM-PWXNMJ2"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "UA-23064379-23");
          `,
        }}
      />
    </>
  );
}
