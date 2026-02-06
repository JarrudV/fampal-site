import { Layout } from "@/components/layout";

export function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-width max-w-3xl prose prose-slate lg:prose-lg">
          <h1>Privacy Policy</h1>
          <p className="text-slate-500 lead">Last updated: February 2026</p>
          
          <h3>1. Introduction</h3>
          <p>
            Welcome to FamPal. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            or use our mobile application.
          </p>

          <h3>2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul>
            <li>Identity Data includes first name, last name, username.</li>
            <li>Contact Data includes email address.</li>
            <li>Usage Data includes information about how you use our website and services.</li>
          </ul>

          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
            to provide the service to you, improve our app, and communicate with you.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy, please contact us at support@fampal.co.za.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export function Terms() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container-width max-w-3xl prose prose-slate lg:prose-lg">
          <h1>Terms of Service</h1>
          <p className="text-slate-500 lead">Last updated: February 2026</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using FamPal, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on FamPal's 
            website for personal, non-commercial transitory viewing only.
          </p>

          <h3>3. Disclaimer</h3>
          <p>
            The materials on FamPal's website are provided on an 'as is' basis. FamPal makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions 
            of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3>4. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably 
            submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </section>
    </Layout>
  );
}