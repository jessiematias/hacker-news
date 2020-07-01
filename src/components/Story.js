import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';
import { StoryContainer, StoriesContainer, Points } from '../styles/StoryStyles';
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'

JavascriptTimeAgo.addLocale(en)

const Story = ({ storyId }) => {
    const [story, setStory] = useState({})
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
        <StoriesContainer>
            <Points>{story.score ? story.score : 0}</Points>
                <StoryContainer>

                    <h3><a rel="noopener noreferrer" target="_blank" href={story.url}>{story.title}</a></h3>

                    <span>by: {story.by} </span>

                    <span><ReactTimeAgo date={story.time * 1000} /></span>

                    <span> | {story.descendants === 1 ? `${story.descendants} comment` : `${story.descendants} comments`}</span>
                </StoryContainer>
        </StoriesContainer>
    ) : null
}
export default Story