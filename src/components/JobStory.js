import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';
import { StoryContainer, StoriesContainer } from '../styles/StoryStyles';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'

JavascriptTimeAgo.addLocale(en)

const JobStory = ({ storyId }) => {
    const [story, setStory] = useState({})
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [storyId])

    return story && story.url ? (
        <StoriesContainer>
                <StoryContainer>
                    <h3><a rel="noopener noreferrer" target="_blank" href={story.url}>{story.title}</a></h3>

                    <span><ReactTimeAgo date={story.time * 1000} /></span>

                </StoryContainer>
        </StoriesContainer>
    ) : null
}
export default JobStory