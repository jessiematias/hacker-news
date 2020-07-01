import React, { useState, useEffect } from 'react';
import { getTopStoryIds } from '../services/hnApi';
import Story from '../components/Story';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';
import { Spinner } from '../styles/LoadingStyles';

const TopStories = () => {
    const [storyIds, setStoryIds] = useState([])
    let infiniteScroll = useInfiniteScroll()

    useEffect(() => {
        getTopStoryIds().then(data => setStoryIds(data))
    }, [])

    return storyIds.length ? storyIds.slice(0, infiniteScroll).map(storyId => <Story key={storyId} storyId={storyId} /> ) : <Spinner />
}

export default TopStories