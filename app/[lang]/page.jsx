// Components
import ArticleHero from "../../components/article-hero/article-hero.component";
import ArticleEducation from "../../components/article-education/article-education.component";
import ArticleTechstack from "../../components/article-techstack/article-techstack.component";
import ArticleContact from "../../components/article-contact/article-contact.component";

export default function Home() {
  return (
    <main className="main">
      <ArticleHero />
      <ArticleEducation />
      <ArticleTechstack />
      <ArticleContact />
    </main>
  );
}
