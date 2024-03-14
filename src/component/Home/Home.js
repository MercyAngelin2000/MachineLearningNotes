import React from 'react'
import './Home.css'
import intro from '../../assets/intro.png'
function Home() {
    return (
        <>
            <div className='row'>
                <div className='container p-5'>
                    <div className='row mb-2'>
                        <div className='card card_style'>
                            <div className='row'>
                                <div className='col-8'>
                                    <strong>What is Machine learning?</strong>
                                    <p>Machine learning (ML) is defined as a discipline of artificial intelligence (AI) that provides machines the ability to automatically learn from data and past experiences to identify patterns and make predictions with minimal human intervention.</p>
                                    <p><strong>It works by exploring data and identifying patterns.</strong></p>
                                    <p><strong>Eg: </strong>ML use on social media platforms today: Social media, such as Facebook, automates friend-tagging suggestions by using ML face detection and image recognition to identify a face in its database. Then, it suggests the social media user tag that individual</p>
                                </div>
                                <div className='col-4'>
                                    <img src={intro} className='imgZoom' alt='introImg' height="300px" width="300px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='card card_style'>
                            <strong>What is Machine learning?</strong>
                            <p>Machine learning (ML) is defined as a discipline of artificial intelligence (AI) that provides machines the ability to automatically learn from data and past experiences to identify patterns and make predictions with minimal human intervention.</p>
                            <p><strong>It works by exploring data and identifying patterns.</strong></p>
                            <p><strong>Eg: </strong>ML use on social media platforms today: Social media, such as Facebook, automates friend-tagging suggestions by using ML face detection and image recognition to identify a face in its database. Then, it suggests the social media user tag that individual</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home