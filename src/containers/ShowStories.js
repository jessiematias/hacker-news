import React, { useState, useEffect } from 'react';
import { getShowStoryIds } from '../services/hnApi';
import Story from '../components/Story';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
import { Spinner } from '../styles/LoadingStyles';

const ShowStories = () => {
    const [storyIds, setStoryIds] = useState([])
    let infiniteScroll = useInfiniteScroll()

    useEffect(() => {
        getShowStoryIds().then(data => setStoryIds(data))
    }, [])

    return storyIds.length ? storyIds.slice(0, infiniteScroll).map(storyId => <Story key={storyId} storyId={storyId} /> ) : <Spinner />
}

export default ShowStories