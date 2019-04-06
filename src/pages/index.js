import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import addToMailchimp from "gatsby-plugin-mailchimp";
import EmailValidator from "email-validator";
const IndexPage = () =>{

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }
 
 return  (



  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <form onSubmit={handleSubmit}>
      <input name='email' value={email} onChange={e => setEmail(e.target.value)} type='text' />
      <button type='submit'>Senden</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
