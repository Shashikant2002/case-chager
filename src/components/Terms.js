export default function AboutUs(props) {
        let DarkStyle = {
            color: props.mode === 'dark' ? 'white' : 'black',             
            backgroundColor: props.mode === 'dark' ? '#2C3033' : '#fff'
        }

    return (
        <div className="full py-1 mt-3 wid-70" style={DarkStyle}>
            <div className='container mt-5 text-center wid-70'>
                <h1 className='text-center my-3'><strong>Terms and Conditions</strong></h1>
                <h2>Terms</h2>
                <p>By visiting https://listngo.in/, you agree to be bound by these terms of service and all applicable laws and regulations and are responsible for complying with applicable local laws. You are not permitted to use or access this site if you do not agree with these terms. This website's materials are protected by applicable copyright and trademark law.</p>
                <h2>Use licence</h2>
                <p>Permission is granted for personal, non-commercial transitory viewing of the materials (information or software) on the website.</p>
                <p><strong>This is a licence, not a sale, and under this licence, you may not:</strong></p>
                <p>Modify or copy the materials.</p>
                <p>Use the materials for any commercial or non-commercial purpose.</p>
                <p>Attempt to decompile or reverse engineer any software on the website.</p>
                <p>Remove any copyright or other proprietary notations from the materials.</p>
                <p>Transfer the materials to another person or "mirror" the materials on any other website.</p>
                <p>If you violate any of these restrictions, your licence will be automatically terminated, and website may terminate it. You must destroy any downloaded materials in your possession, whether in electronic or printed format, when you stop viewing these materials or when this licence expires.</p>
                <h2>Disclosure</h2>
                <p>Case convertor makes no express or implied warranties and expressly disclaims and negates all other warranties, including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other rights.</p>
                <p>Furthermore, we makes no warranties or representations about the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or sites linked to this site.</p>
                <h2>Limitations</h2>
                <p>In no event shall this website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit or business interruption) arising from the use or inability to use the materials on the website, even if the website authorised representative has been notified orally or in writing of the possibility of such damage. These limitations may not apply to you because some jurisdictions do not allow limitations on implied warranties or limitations on liability for consequential or incidental damages.</p>
                <h2>Accuracy of materials</h2>
                <p>Technical, typographical, or photographic errors may appear in the website materials. we makes no warranty that the materials on its website are accurate, complete, or up to date. This website reserves the right to change the materials on its website without notice. On the other hand, it does not commit to updating the materials.</p>
                <h2>Links</h2>
                <p>website has not inspected all of the sites linked to its website and accepts no accountability for the contents of any such linked site. Including any link does not imply website’s approval of the site. The use of any such linked website is entirely at the user's risk.</p>
                <h2>Modifications</h2>
                <p>we secures the right to revise these terms of service for its website without notice. You agree to be bound by the then-current version of these terms of service by using this website.</p>
            </div>
        </div>
    )
}
