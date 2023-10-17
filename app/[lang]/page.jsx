// Next functions
import dynamic from "next/dynamic";
// Components
import LoadingBlock from "../../components/r-loading-block/loading-block.component";
const ArticleHero = dynamic(() => import('../../components/article-hero/article-hero.component'), { ssr: false, loading: () => <LoadingBlock width={'100%'} height={'300px'} />})
const ArticleEducation = dynamic(() => import('../../components/article-education/article-education.component'), { ssr: false, loading: () => <LoadingBlock width={'100%'} height={'300px'} />})
const ArticleTechstack = dynamic(() => import('../../components/article-techstack/article-techstack.component'), { ssr: false, loading: () => <LoadingBlock width={'100%'} height={'300px'} />})
const ArticleContact = dynamic(() => import('../../components/article-contact/article-contact.component'), { ssr: false, loading: () => <LoadingBlock width={'100%'} height={'300px'} />})

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
