export default function AboutUs(props) {
    let DarkStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#2C3033' : '#fff'
    }

    return (
        <div className="full wid-70 py-1 mt-3 wid-70" style={DarkStyle}>
            <div className='container mt-5 text-center wid-70'>
                <h1 className='text-center my-3'><strong>About Us</strong></h1>
                <p>Listngo is intended to be a free online text manipulator that can be used to improve efficiency and productivity (and, in some cases just a bit of fun as well). Whether you have accidentally written all of your text in capital letters or you need to quickly align the correct capitalisation structure for titles. Listngo enables you to quickly correct any errors as well as generate a variety of results from the tools listed above.</p>
                <h3 className="mt-5">HOW TO USE CASE CONVERTER</h3>
                <p>Did you write a full note or document without recognizing it in caps lock? Don't worry, and you don't have to delete and rewrite everything. For converting text to the correct capitalization style, use our tool - The Listngo Case Converter. The upper case to lower case tool can convert lowercase letters- a, b, c.-to uppercase letters- A, B., C., etc.</p>
                <h4 className="mt-5">Here's a 3 step quick guide on how to use the Case Changer:</h4>
                <p>In the Case Converter screen (see screenshot), copy and paste your sentences into whichever box is relevant for conversion. While spacing will be preserved, fonts may not show up as originally formatted. Choose any of these options: "Sentence," "Upper," Lower", and "Title" Your text should appear with its new capitalization at once onscreen! Now select your sentence/s manually by clicking them before copying them for pasting elsewhere if needed."</p>
                <h2 className="mt-5">There are a lot of reasons why the case converter is important.</h2>

                <p>The title itself has an important role, so it should be properly formed. All major words in titles are capitalized, while minor words tend to be reduced when viewed in text. Similarly, text-transform works perfectly for changing the case of texts within sentences with its built-in features that make it easy to type them out and copy/paste them back into your document later on by selecting lowercase or other converters available on this site, depending on which you want </p>
                <p>Once you have completed using our practical converter and made all necessary changes, such as transforming any sentence cases (lowercase/uppercase) or converting between two different alphabetical cases (texts), just paste them back into your document where needed.</p>
                <p>For those who work from their office jobs or other professions that require working with texts; there will always come a time when they need to change the already typed text register due to its formatting requirements at hand - whether mixing up letters frequencies or even making sure nothing else gets lost during the typing process.</p>
                <p>Case convertor is a quick and easy tool that allows you to convert text between uppercase and lowercase letters. Just paste the text into the box, click on one of our buttons and let us do all the work!</p>
                
            </div>
        </div>
    )
}
