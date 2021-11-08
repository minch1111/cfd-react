import React, { useState, useEffect } from 'react'
import Courses from '../../components/Course/index.jsx'
import Action from './components/action.jsx'
import Banner from './components/banner'
import Comments from './components/comments'
import Differents from './components/differents'
import Gallery from './components/gallery'
import courseServices from '../../services/courseServices'
import Loading from '../../components/Loading/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetCourse } from '../../store/action/index.js'

function Home() {
    // let [data,setData] = useState()
    // const [loading,setLoading]=useState(true);

    let [state, setState] = useState({
        data: {},
        loading: true
    })

    const dispatch = useDispatch()
    const {online,offline} = useSelector(state => state.course) 

    useEffect(async () => {
        // set loading 

        //call api
        let data = await courseServices.home()
        // console.log(`data`, data)
        dispatch(fetchGetCourse())
        console.log(`online`, online)
        // set data
        setState({
            loading: false,
            data
        })
        // set error
        // set loading

    }, [])
    if (state.loading) return <Loading />
    return (
        <main className="homepage" id="main">
            <Banner />
            <Courses name="Khoá học offline"
                description="The readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it
                  has a more-or-less normal"
                data={offline}

            />
            <Courses name="Khoá học online"
                data={online}
            />
            <Differents />
            {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
            <Comments
                data={state.data.review} />

            <Gallery

                data={state.data.gallery}
            />

            <Action />
        </main>
    )
}

export default Home
