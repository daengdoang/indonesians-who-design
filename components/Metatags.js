export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Indonesians Who Design" />
      <meta
        name="description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="indonesians-who-design.vercel.app" />
      <meta property="og:title" content="indonesians Who Design" />
      <meta
        property="og:description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />
      <meta
        property="og:image"
        content="http://indonesians-who-design.vercel.app/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="indonesians-who-design.vercel.app" />
      <meta property="twitter:title" content="Indonesians Who Design" />
      <meta
        property="twitter:description"
        content="A repository to celebrate the work of talented Brazilian designers and showcase it to the world."
      />
      <meta
        property="twitter:image"
        content="indonesians-who-design.vercel.app/img/preview.png"
      />
    </>
  );
}
