import content from "@/content/siteContent.json";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>{content.footer.copyright}</p>
        <p>
          <a href="#">{content.footer.privacyLink}</a>
        </p>
      </div>
    </footer>
  );
}
