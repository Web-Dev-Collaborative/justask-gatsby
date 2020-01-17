/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";
import PageLink from "../components/PageLink";
import Paragraph from "../components/Paragraph";
import SEO from "gatsby-theme-seo/src/components/seo";

const SEODescription = `
  justask.dev is a website built for frontend developers. Its aim is the storing and categorizing of
  answers to "simple" dev questions.
`;

const SEOKeywords = [
  "Web Developer",
  "Frontend Developer",
  "React",
  "Gatsby",
  "GIT",
  "JavaScript",
  "CSS",
  "HTML"
];

const Categories = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
`;

const Introduction = styled.section`
  margin-top: 1em;

  & > p {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
  }

  & > a {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
  }
`;

export default () => {
  return (
    <Layout>
      <SEO
        title="A website that provides answers to simple dev questions"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <Categories>
        <PageLink page="css-answers" title="CSS" />
        <PageLink page="css-in-js-answers" title="CSS-in-JS" />
        <PageLink page="html-answers" title="HTML" />
        <PageLink page="react-answers" title="React" />
        <PageLink page="gatsby-answers" title="Gatsby" />
        <PageLink page="git-answers" title="Git" />
        <PageLink page="javascript-answers" title="JavaScript" />
        <PageLink page="typescript-answers" title="TypeScript" />
        <PageLink page="vs-code-answers" title="VS-Code" />
      </Categories>
      <Introduction>
        <Paragraph>
          The motivation behind this website is to provide an easy way for
          developers new and old to search for those annoying things we all
          forget.
        </Paragraph>
        <Paragraph>
          If you have been googling for an answer to a question and found it
          then please consider sharing it here so that others might benifit. The
          goal of this site is growth through community contributions.
        </Paragraph>
        <Paragraph>
          To contribute please open a PR at:
          <a
            sx={{
              color: "greyBlack",
              fontFamily: "body",
              ":hover": {
                color: "softRed"
              }
            }}
            href="https://github.com/molebox/justask.dev"
          >
            github.com/molebox/justask.dev
          </a>
        </Paragraph>
      </Introduction>
    </Layout>
  );
};
