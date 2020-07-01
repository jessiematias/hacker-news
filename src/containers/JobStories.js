import React, { useState, useEffect } from 'react';
import { getJobStoryIds } from '../services/hnApi';
import JobStory from '../components/JobStory';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
import { Spinner } from '../styles/LoadingStyles';

const JobStories = () => {
    const [storyIds, setStoryIds] = useState([])
    let infiniteScroll = useInfiniteScroll()

    useEffect(() => {
        getJobStoryIds().then(data => setStoryIds(data))
    }, [])

    return storyIds.length ? storyIds.slice(0, infiniteScroll).map(storyId => <JobStory key={storyId} storyId={storyId} /> ) : <Spinner />
}

export default JobStories