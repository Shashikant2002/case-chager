export default function AboutUs(props) {
        let DarkStyle = {
            color: props.mode === 'dark' ? 'white' : 'black',             
            backgroundColor: props.mode === 'dark' ? '#2C3033' : '#fff'
        }

    return (
        <div className="full py-1 mt-3" style={DarkStyle}>
            <div className='container mt-5 text-center'>
                <h1 className='text-center my-3'><strong>Privacy policy</strong></h1>
                <p>Your privacy is incredibly important to us. website's policy is to respect your privacy about any information we may collect from you on our website, https://listngo.in, and other sites we own and operate.</p>
                <h2>We collect information.</h2>
                <h3>Log Data </h3>
                <p>Our servers may automatically log the standard data delivered by your web browser when you visit our website. This information is referred to as "non-identifying information" because it does not personally identify you. It may contain your computer's Internet Protocol (IP) address, browser type and version, the pages you visit, the time and date of your visit, time spent on each page, and other information.</p>
                <h3>How we gather information</h3>
                <p>With your knowledge and consent, we collect the information fairly and lawfully. We also explain why we're collecting it and how we plan to use it. You can refuse our request for this information, understanding that we may be unable to provide you with some of the services you require without it.</p>
                <h3>Use of Information</h3>
                <p>We may use identifying and non-identifying information to learn more about our visitors, how they use our services, and how we can improve their future experiences with our website. We do not publicly disclose the specifics of this information, but we may share aggregated and anonymized versions of it, for example, in website and customer usage trend reports.</p>
                <h3>Processing and storage of data</h3>
                <p>We only keep personal information as long as it is required to provide a service or to improve our services in the future. While we keep this information, we will safeguard it using commercially reasonable means to prevent loss and theft and unauthorized access, disclosure, copying, use, or modification. However, we caution that no electronic transmission or storage method is completely secure and cannot guarantee complete data security.</p>
                <h3>Cookies</h3>
                <p>We collect information about you and your activity on our site using "cookies." A cookie is a small piece of data that our website stores on your computer and accesses each time you visit for us to understand how you use our site and serve you content based on your preferences.</p>
                <p>If you do not want to accept cookies from us, you should instruct your browser to reject cookies from our website, understanding that we may be unable to provide you with some of the services you require without them. This policy only applies to cookies between your computer and our website; it does not apply to any third-party services that we use on our site.</p>
                <h3>Third-party information access</h3>
                <p>For our website and marketing activities, we may use third-party services. These services may have access to our data solely to perform specific tasks on our behalf. We do not share any personally identifying information with these services without your explicit consent. We do not authorize these services to disclose or use any of our data for any other purpose.</p>
                <p>We will refuse government and law enforcement data requests if we believe they are too broad or unrelated to the stated purpose. We may cooperate, however, if we believe the requested information is necessary and appropriate to comply with the legal process, protect our rights and property, protect the safety of the public and any person, prevent a crime, or prevent what we reasonably believe to be illegal, legally actionable, or unethical activity.</p>
                <p>We do not share or provide personal information to third parties in any other way. We do not sell or rent your personal information to marketers or third-party organizations.</p>
                <h3>Your legal rights and obligations</h3>
                <p>As a user, you have the right to know how your data is collected and used. You have the right to know what information we collect about you and its use. You have the right to correct and update any personal information about yourself and request that it be deleted.</p>
                <p>You have the right to limit or object to our use of your data while still having the ability to use your personal information for your purposes. You have the right to refuse the use of data about you in decisions solely based on automated processing.</p>
                <p>If you have any concerns or questions about how we handle your data and personal information, please get in touch with us.</p>
            </div>
        </div>
    )
}
