import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import ReactMarkdown from "react-markdown";

const BudgetPage = () => {

  // TODO: order by order
  const { allSanityBudget } = useStaticQuery(graphql`
      query BudgetQuery {
        allSanityBudget {
          nodes {
            id
            service
            description
          }
        }
      }
    `)

  return (
    <>
      <Header />
      <main>
        <h1>Budget</h1>
        {allSanityBudget.nodes.map(budget => (
          <section key={budget.id}>
            <h2>{budget.service}</h2>
            <ReactMarkdown children={budget.description} />
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
};

export default BudgetPage;